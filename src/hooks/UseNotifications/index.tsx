import { Flipper, Flipped } from "react-flip-toolkit";
import { ReactNode, useRef, useState, useEffect } from "react";
import "./style.css";
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
};
type NoticeData = { key: number; value: ReactNode };
type PushConfig = {
  existsMS?: number;
};

export const push = (notice: ReactNode, config?: PushConfig): void => {
  if (nEventMgr.onPush.length === 0) {
    throw new Error(
      "No notification event listener, you should add at least one Notifications Component to your app."
    );
  }
  nEventMgr.onPush.forEach((cb) => cb(notice, config));
};

interface NotificationsEventManager {
  onPush: ((notice: ReactNode, config?: PushConfig) => void)[];
}

const nEventMgr: NotificationsEventManager = {
  onPush: [],
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
    if (!config.existsMS) {
      existsMS = config.existsMS;
    }
    if (!existsMS) {
      existsMS = props.defaultExistsMS || 3000 * 1000;
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

  // resiger push callback, notice that it is a effect.
  useEffect(() => {
    nEventMgr.onPush.unshift(pushCallback);
    return () => {
      nEventMgr.onPush.splice(nEventMgr.onPush.indexOf(pushCallback), 1);
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
                {notice.value}
              </Flipped>
            );
          })}
        </div>
      </Flipper>
    </div>
  );
};
