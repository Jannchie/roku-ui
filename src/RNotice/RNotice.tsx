import classNames from "classnames";
import { ReactNode } from "react";
import "./RNotice.css";
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
}: {
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
}) {
  const wrapperCls = classNames(
    "r-notice-wrapper",
    { dense: dense },
    { border: outlined },
    textColor,
    wrapperClass
  );
  const descCls = classNames("r-notice-desc", subColor, descClass);
  const titleCls = classNames("r-notice-title", mainColor, titleClass);
  const iconCls = classNames("r-notice-icon", mainColor);
  return (
    <div className={wrapperCls}>
      <div className="flex">
        <div className={iconCls}>{icon}</div>
        <div>
          <div className={titleCls}>{title}</div>
          <div className={descCls}>{desc}</div>
        </div>
      </div>
    </div>
  );
}
