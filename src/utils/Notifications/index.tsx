import "./style.css";
import { AnimatePresence, motion, } from "framer-motion";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Notice } from "../..";
import classNames from "classnames";

export function animate(
  el: HTMLElement,
  keyframes: Keyframe[] | PropertyIndexedKeyframes,
  options?: number | KeyframeAnimationOptions
): Promise<void> {
  return new Promise((resolve) => {
    const anim = el.animate(keyframes, options);
    anim.addEventListener("finish", () => resolve());
    anim.addEventListener("cancel", () => resolve());
  });
}

type NotificationConfig = {
  left?: boolean;
  right?: boolean;
  center?: boolean;
  top?: boolean;
  bottom?: boolean;
  className?: string;
  defaultExistsMS?: number;
  maxCount?: number;
  close?: () => void;
  wait?: boolean;
};
type NoticeData = { key: number; value: ReactNode };
type PushConfig = {
  existsMS?: number;
};

export type NoticeConfig = {
  title: string;
  desc?: string;
  type?: "success" | "danger" | "warning" | "info";
  existsMS?: number;
  progressBar?: boolean;
  closable?: boolean;
};

export const customPush = (notice: ReactNode, config?: PushConfig): void => {
  if (nEventMgr.onPush.length === 0) {
    throw new Error(
      "No notification event listener, you should add at least one Notifications Component to your app."
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
  let mainTextColor = "";
  let mainBgColor = "";
  const subColor = "";

  let icon: ReactNode = "";
  switch (type) {
  case "success": {
    mainTextColor = "text-success-500";
    mainBgColor = "bg-success-500";
    icon = <span className="material-symbols-outlined">check_circle</span>;
    break;
  }
  case "danger": {
    mainTextColor = "text-danger-500";
    mainBgColor = "bg-danger-500";
    icon = <span className="material-symbols-outlined">cancel</span>;
    break;
  }
  case "warning": {
    mainTextColor = "text-warning-500";
    mainBgColor = "bg-warning-500";
    icon = <span className="material-symbols-outlined">error</span>;
    break;
  }
  default: {
    mainTextColor = "text-primary-500";
    mainBgColor = "bg-primary-500";
    icon = (
      <span className="material-symbols-outlined">circle_notifications</span>
    );
  }
  }
  const n = (
    <Notice
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
      outlined={true}
      progress={true}
      shadow={true}
      subColor={subColor}
      title={title}
    />
  );
  customPush(n, { existsMS });
};

interface NotificationsEventManager {
  onPush: ((notice: ReactNode, config?: PushConfig) => void)[];
  onRemove: ((notice: ReactNode) => void)[];
}

const nEventMgr: NotificationsEventManager = {
  onPush: [],
  onRemove: [],
};

export const RNotifications = (props: NotificationConfig) => {
  let align = "top";
  if (props.bottom) {
    align = "bottom";
  }
  let justify = "center";
  if (props.left) {
    justify = "left";
  }
  if (props.right) {
    justify = "right";
  }
  const [notices, setNotices] = useState<NoticeData[]>([]);
  const id = useRef(1);
  const waitList = useRef<[ReactNode, PushConfig][]>([]);
  const pushCallback = useCallback((notice: ReactNode, config: PushConfig = {}) => {
    let existsMS;
    if (config.existsMS) {
      existsMS = config.existsMS;
    }
    if (!existsMS) {
      existsMS = props.defaultExistsMS || 3000;
    }
    if (props.maxCount) {
      if (notices.length >= props.maxCount) {
        if (props.wait) {
          waitList.current.push([notice, config]);
          return;
        } else {
          notices.pop();
        }
      }
    }
    const currentId = id.current;

    id.current += 1;
    setNotices([{ key: currentId, value: notice }, ...notices]);
    setTimeout(() => {
      setNotices((val) => val.filter((n) => n.key !== currentId));
    }, existsMS);
  },[notices, props.defaultExistsMS, props.maxCount, props.wait]);

  useEffect(() => {
    if (props.wait) {
      if (props.maxCount) {
        if (waitList.current.length > 0 && notices.length < props.maxCount) {
          const current = waitList.current.shift();

          if (current) {
            pushCallback(...current);
          }
        }
      }
    }
  }, [notices, props.maxCount, props.wait, pushCallback]);

  const removeCallback = (notice: ReactNode) => {
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
        "r-notification",
        `r-${justify}`,
        `r-${align}`,
        props.className
      )}
    >
      <div
        ref={noticesWrapper}
        className={classNames("flex gap-2 h-0 r-notices-wrapper", {
          "flex-col": align === "top",
          "flex-col-reverse": align === "bottom",
        })}
      >
        <AnimatePresence>
          {notices
            .sort((a, b) => b.key - a.key)
            .map((notice) => {
              return (
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
              );
            })}
        </AnimatePresence>
      </div>
    </div>
  );
};
