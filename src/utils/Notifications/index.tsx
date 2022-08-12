import './style.css';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import classNames from 'classnames';
import { Notice } from '../..';

type NotificationConfig = {
  left?: boolean;
  right?: boolean;
  bottom?: boolean;
  className?: string;
  defaultExistsMS?: number;
  maxCount?: number;
  wait?: boolean;
};

type NoticeData = { key: number; value: ReactNode };
type PushConfig = {
  existsMS?: number;
};

export type NoticeConfig = {
  title: string;
  desc?: string;
  type?: 'success' | 'danger' | 'warning' | 'info';
  existsMS?: number;
  progressBar?: boolean;
  closable?: boolean;
};

export type OnPush = (notice: ReactNode, config?: PushConfig) => void;
type OnRemove = (notice: ReactNode) => void;

interface NotificationsEventManager {
  onPush: OnPush[];
  onRemove: OnRemove[];
}

const nEventMgr: NotificationsEventManager = {
  onPush: [],
  onRemove: [],
};

export const customPush = (notice: ReactNode, config?: PushConfig): void => {
  if (nEventMgr.onPush.length === 0) {
    throw new Error(
      'No notification event listener, you should add at least one Notifications Component to your app.',
    );
  }
  nEventMgr.onPush.forEach((cb) => cb(notice, config));
};
export const pushNotice = (config: PushConfig & NoticeConfig) => {
  let { existsMS, progressBar, closable } = config;
  const { title, desc, type } = config;

  if (!existsMS) existsMS = 3000;
  if (!progressBar) progressBar = false;
  if (!closable) closable = true;
  let mainTextColor = '';
  let mainBgColor = '';
  const subColor = '';

  let icon: ReactNode = '';
  switch (type) {
    case 'success': {
      mainTextColor = 'text-success-500';
      mainBgColor = 'bg-success-500';
      icon = <span className="material-symbols-outlined">check_circle</span>;
      break;
    }
    case 'danger': {
      mainTextColor = 'text-danger-500';
      mainBgColor = 'bg-danger-500';
      icon = <span className="material-symbols-outlined">cancel</span>;
      break;
    }
    case 'warning': {
      mainTextColor = 'text-warning-500';
      mainBgColor = 'bg-warning-500';
      icon = <span className="material-symbols-outlined">error</span>;
      break;
    }
    default: {
      mainTextColor = 'text-primary-500';
      mainBgColor = 'bg-primary-500';
      icon = (
        <span className="material-symbols-outlined">circle_notifications</span>
      );
    }
  }
  const n = (
    <Notice
      outlined
      progress
      shadow
      close={
        closable
          ? () => {
            nEventMgr.onRemove.forEach((cb) => cb(n));
          }
          : undefined
      }
      desc={desc}
      existMS={existsMS}
      icon={icon}
      mainBgColor={mainBgColor}
      mainTextColor={mainTextColor}
      subColor={subColor}
      title={title}
    />
  );
  customPush(n, { existsMS });
};

export function Notifications({
  bottom, left, right, defaultExistsMS, maxCount, wait, className,
}: NotificationConfig) {
  let align = 'top';
  if (bottom) {
    align = 'bottom';
  }
  let justify = 'center';
  if (left) {
    justify = 'left';
  }
  if (right) {
    justify = 'right';
  }
  const [notices, setNotices] = useState<NoticeData[]>([]);
  const id = useRef(1);
  const waitList = useRef<[ReactNode, PushConfig][]>([]);
  const pushCallback = useCallback<OnPush>((notice: ReactNode, config: PushConfig = {}) => {
    let existsMS;
    if (config.existsMS) {
      existsMS = config.existsMS;
    }
    if (!existsMS) {
      existsMS = defaultExistsMS || 3000;
    }
    if (maxCount) {
      if (notices.length >= maxCount) {
        if (wait) {
          waitList.current.push([notice, config]);
          return;
        }
        notices.pop();
      }
    }
    const currentId = id.current;

    id.current += 1;
    setNotices([{ key: currentId, value: notice }, ...notices]);
    setTimeout(() => {
      setNotices((val) => val.filter((n) => n.key !== currentId));
    }, existsMS);
  }, [maxCount, notices, defaultExistsMS, wait]);

  useEffect(() => {
    if (wait) {
      if (maxCount) {
        if (waitList.current.length > 0 && notices.length < maxCount) {
          const current = waitList.current.shift();

          if (current) {
            pushCallback(...current);
          }
        }
      }
    }
  }, [notices, maxCount, wait, pushCallback]);

  const removeCallback: OnRemove = (notice: ReactNode) => {
    setNotices((val) => val.filter((n) => n.value !== notice));
  };

  // resiger callback, notice that it is a effect.
  useEffect(() => {
    nEventMgr.onPush.unshift(pushCallback);
    return () => {
      nEventMgr.onPush.splice(nEventMgr.onPush.indexOf(pushCallback), 1);
    };
  });
  useEffect(() => {
    nEventMgr.onRemove.unshift(removeCallback);
    return () => {
      nEventMgr.onRemove.splice(nEventMgr.onRemove.indexOf(removeCallback), 1);
    };
  });
  const noticesWrapper = useRef<HTMLDivElement>(null);
  return (
    <div
      key="r-notification"
      className={classNames(
        'r-notification',
        `r-${justify}`,
        `r-${align}`,
        className,
      )}
    >
      <div
        ref={noticesWrapper}
        className={classNames('flex gap-2 h-0 r-notices-wrapper', {
          'flex-col': align === 'top',
          'flex-col-reverse': align === 'bottom',
        })}
      >
        <AnimatePresence>
          {notices
            .sort((a, b) => b.key - a.key)
            .map((notice) => (
              <motion.div
                key={notice.key}
                layout // fix order bug
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                style={{ order: -notice.key }}
                transition={{ duration: 0.3 }}
              >
                {notice.value}
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
