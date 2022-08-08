import { Flipper, Flipped } from "react-flip-toolkit";
import { ReactNode, useRef, useState, useEffect, useMemo } from "react";
import "./style.css";
import classNames from "classnames";
import { RNotice } from "../../components/RNotice/RNotice";

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
let currentID = 1;
export const push = (config: PushConfig & NoticeConfig) => {
  let { title, desc, type, existsMS, progressBar, closable } = config;
  if (!existsMS) existsMS = 3000;
  if (!progressBar) progressBar = false;
  if (!closable) closable = true;
  let mainTextColor: string = "";
  let mainBgColor: string = "";
  let subColor: string = "";
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
    <RNotice
      title={title}
      desc={desc}
      mainTextColor={mainTextColor}
      mainBgColor={mainBgColor}
      subColor={subColor}
      progress={true}
      outlined={true}
      icon={icon}
      existMS={existsMS}
      close={
        closable
          ? () => {
              nEventMgr.onRemove.forEach((cb) => cb(n));
            }
          : undefined
      }
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

export const Notifications = (props: NotificationConfig) => {
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
  const pushCallback = (notice: ReactNode, config: PushConfig = {}) => {
    let existsMS;
    if (config.existsMS) {
      existsMS = config.existsMS;
    }
    if (!existsMS) {
      existsMS = props.defaultExistsMS || 3000;
    }
    if (notices.length >= (props.maxCount ?? 5)) {
      notices.pop();
    }
    let currentId = id.current;
    id.current += 1;
    setNotices([{ key: currentId, value: notice }, ...notices]);
    setTimeout(() => {
      setNotices((val) => val.filter((n) => n.key !== currentId));
    }, existsMS);
  };
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
      className={classNames(
        "r-notification",
        `r-${justify}`,
        `r-${align}`,
        props.className
      )}
      key="r-notification"
    >
      <Flipper
        flipKey={`r-notification-${notices.map((d) => `${d.key}`).join("")}`}
      >
        <div
          className={classNames("flex gap-2 h-0 r-notices-wrapper", {
            "flex-col": align === "top",
            "flex-col-reverse": align === "bottom",
          })}
          ref={noticesWrapper}
        >
          {notices.map((notice) => {
            return (
              <Flipped
                flipId={notice.key}
                key={notice.key}
                onExit={(el, _, removeEl) => {
                  animate(
                    el,
                    {
                      opacity: [1, 0],
                      width: ["100%", "0"],
                    },
                    {
                      duration: 200,
                      easing: "ease-in",
                    }
                  ).then(() => {
                    removeEl();
                  });
                }}
                onAppear={(el) => {
                  animate(
                    el,
                    {
                      opacity: [0, 1],
                      width: ["0", "100%"],
                    },
                    {
                      duration: 200,
                      easing: "ease-out",
                    }
                  ).then(() => {
                    el.style.opacity = "1";
                  });
                }}
              >
                <div>{notice.value}</div>
              </Flipped>
            );
          })}
        </div>
      </Flipper>
    </div>
  );
};
