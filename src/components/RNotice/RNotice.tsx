import classNames from "classnames";
import { ReactNode, useEffect, useRef, useState } from "react";
import { RBtn } from "../..";
import { Flipper, Flipped } from "react-flip-toolkit";
import "./RNotice.css";
export type RNoticeConfig = {
  textColor?: string;
  mainTextColor?: string;
  mainBgColor?: string;
  subColor?: string;
  title?: string;
  desc?: string;
  wrapperClass?: string;
  titleClass?: string;
  descClass?: string;
  icon?: ReactNode;
  outlined?: boolean;
  dense?: boolean;
  progress?: boolean;
  close?: () => void;
  existMS?: number;
};

export function RNotice({
  wrapperClass,
  textColor,
  mainTextColor,
  mainBgColor,
  subColor,
  title,
  desc,
  titleClass,
  descClass,
  progress = false,
  outlined = false,
  dense = false,
  icon = <span className="material-symbols-outlined">check_circle</span>,
  existMS = 3000,
  close,
}: RNoticeConfig) {
  const wrapperCls = classNames(
    "r-notice-wrapper",
    { dense: dense },
    { border: outlined },
    textColor,
    wrapperClass
  );
  const descCls = classNames("r-notice-desc truncate", subColor, descClass);
  const titleCls = classNames(
    "r-notice-title truncate",
    mainTextColor,
    titleClass
  );
  const iconCls = classNames("r-notice-icon", mainTextColor);
  const pVal = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (pVal.current) {
      const pv = pVal.current;
      animate(
        pv,
        [
          {
            width: "0%",
          },
          {
            width: `100%`,
          },
        ],
        {
          duration: existMS,
          easing: "linear",
        }
      ).then(() => {
        pv.style.width = "100%";
        if (close) {
          close();
        }
      });
    }
  }, []);
  return (
    <div className={wrapperCls}>
      <div className={classNames(dense ? "p-2" : "p-4")}>
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className={iconCls}>{icon}</div>
            <div className="truncate">
              <div className={titleCls}>{title}</div>
              <div className={descCls}>{desc}</div>
            </div>
          </div>
          {close && (
            <RBtn icon onClick={close} className="!rounded-full">
              <span className="material-symbols-outlined">close</span>
            </RBtn>
          )}
        </div>
      </div>
      {progress && (
        <div className="h-1 flex">
          <div ref={pVal} className={classNames(mainBgColor)}></div>
        </div>
      )}
    </div>
  );
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
