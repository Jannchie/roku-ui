import { Transition } from "@headlessui/react";
import { Flipper, Flipped } from "react-flip-toolkit";
import {
  FC,
  ReactNode,
  useImperativeHandle,
  useRef,
  useState,
  forwardRef,
} from "react";
import { createPortal } from "react-dom";
import "./style.css";
import classNames from "classnames";

interface NotificationsRef {
  unshift(notice: ReactNode, config: UnshiftConfig): void;
}

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
type UnshiftConfig = {
  existsMS?: number;
};
const Notifications = forwardRef<NotificationsRef, NotificationConfig>(
  (props, ref) => {
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
    useImperativeHandle(
      ref,
      (): NotificationsRef => ({
        unshift: (notice: ReactNode, config: UnshiftConfig) => {
          let existsMS;
          if (!config.existsMS) {
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
        },
      })
    );
    return createPortal(
      <Flipper flipKey={`r-notification-${notices.map((d) => d.key).join("")}`}>
        <div
          className={classNames(
            "r-notification",
            `r-${justify}`,
            `r-${align}`,
            props.className
          )}
          key="r-notification"
        >
          <div className="flex gap-2 flex-col">
            {notices.map((notice) => {
              return (
                <Flipped
                  key={notice.key}
                  flipId={notice.key}
                  onAppear={(el) => {
                    animate(
                      el,
                      [
                        {
                          opacity: 0,
                        },
                        {
                          opacity: 1,
                        },
                      ],
                      {
                        duration: 100,
                      }
                    ).then(() => {
                      el.style.opacity = "1";
                    });
                  }}
                  onExit={(el, _, remove) => {
                    animate(
                      el,
                      [
                        {
                          opacity: 1,
                        },
                        {
                          opacity: 0,
                        },
                      ],
                      {
                        duration: 100,
                      }
                    ).then(() => {
                      remove();
                    });
                  }}
                >
                  {notice.value}
                </Flipped>
              );
            })}
          </div>
        </div>
      </Flipper>,
      document.body
    );
  }
);

const useNotifications = (config?: NotificationConfig) => {
  const ref = useRef<NotificationsRef>(null);
  const ctx = <Notifications ref={ref} {...config} />;
  return {
    Notifications: () => ctx,
    notifier: {
      send: (node: ReactNode, config?: UnshiftConfig) => {
        if (ref.current) {
          ref.current.unshift(node, config ?? {});
        }
      },
    },
  };
};

export { useNotifications };
