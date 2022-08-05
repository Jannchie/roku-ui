import classNames from "classnames";
import { ReactNode } from "react";
import { RBtn } from "../..";
import "./RNotice.css";
export type RNoticeConfig = {
  textColor?: string;
  mainColor?: string;
  subColor?: string;
  title?: string;
  desc?: string;
  wrapperClass?: string;
  titleClass?: string;
  descClass?: string;
  icon?: ReactNode;
  outlined?: boolean;
  dense?: boolean;
  close?: () => void;
};

export function RNotice({
  wrapperClass,
  textColor,
  mainColor,
  subColor,
  title,
  desc,
  titleClass,
  descClass,
  outlined = false,
  dense = false,
  icon = <span className="material-symbols-outlined">check_circle</span>,
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
  const titleCls = classNames("r-notice-title truncate", mainColor, titleClass);
  const iconCls = classNames("r-notice-icon", mainColor);
  return (
    <div className={wrapperCls}>
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
  );
}
