import classNames from 'classnames';
import { ReactNode } from 'react';
import {
  Btn, colorClass, Colors, MaterialSymbolIcon, Progress,
} from '../..';
import './Notice.css';

export type NoticeProps = {
  color?: Colors;
  title?: string;
  desc?: string;
  wrapperClass?: string;
  titleClass?: string;
  descClass?: string;
  icon?: ReactNode;
  outlined?: boolean;
  dense?: boolean;
  progress?: boolean;
  shadow?: boolean;
  close?: () => void;
  existMS?: number;
};
export function animate(
  el: HTMLElement,
  keyframes: Keyframe[] | PropertyIndexedKeyframes,
  options?: number | KeyframeAnimationOptions,
): Promise<void> {
  return new Promise((resolve) => {
    const anim = el.animate(keyframes, options);
    anim.addEventListener('finish', () => resolve());
    anim.addEventListener('cancel', () => resolve());
  });
}

export function Notice({
  wrapperClass,
  color = 'primary',
  title,
  desc,
  titleClass,
  descClass,
  shadow = false,
  progress = false,
  outlined = false,
  dense = false,
  icon = <MaterialSymbolIcon icon="check_circle" />,
  existMS = 3000,
  close,
}: NoticeProps) {
  const wrapperCls = classNames(
    'r-notice-wrapper',
    { 'shadow-lg shadow-black/5': shadow },
    'overflow-hidden',
    { dense },
    { border: outlined },
    wrapperClass,
  );
  const mainTextColorCls = colorClass({ text: color });
  const descCls = classNames('r-notice-desc truncate', descClass);
  const titleCls = classNames(
    'r-notice-title truncate',
    mainTextColorCls,
    titleClass,
  );
  const iconCls = classNames('r-notice-icon', mainTextColorCls);
  return (
    <div className={wrapperCls}>
      <div className={classNames(dense ? 'p-2' : 'p-4')}>
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className={iconCls}>{icon}</div>
            <div className="truncate">
              <div className={titleCls}>{title}</div>
              <div className={descCls}>{desc}</div>
            </div>
          </div>
          {close && (
            <Btn
              icon
              text
              className="!rounded-full dark:!text-default-400 hover:!bg-opacity-10 hover:!text-default-900 dark:hover:!text-default-200"
              onClick={close}
            >
              <MaterialSymbolIcon icon="close" />
            </Btn>
          )}
        </div>
      </div>
      {progress && (
        <Progress blur durationMS={existMS} color={color} />
      )}
    </div>
  );
}
