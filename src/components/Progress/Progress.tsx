import './Progress.css';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { BaseProps } from '../../utils/type';
import { colorClass, Colors, isColor } from '../..';

type ProgressProps = {
  color?: Colors | string;
  total?: number;
  value?: number;
  durationMS?: number;
  fake?: boolean;
  infinite?: boolean;
  blur?: boolean;
} & BaseProps;
export function Progress({
  color = 'primary',
  total = 100,
  value = 0,
  infinite = false,
  blur = false,
  durationMS = 0,
  fake = false,
  id,
  className,
  style,
}: ProgressProps) {
  let colorCls: string | undefined;
  if (isColor(color)) {
    colorCls = colorClass({ bg: color });
  }
  const wrapperCls = classNames(className, 'r-progress-wrapper dark:bg-default-800 bg-default-50');
  let precent = 25;
  if (!infinite) {
    precent = Math.min((value / total) * 100, 100);
  }
  let progressMain;
  if (infinite) {
    progressMain = (
      <>
        <motion.div
          animate={{ left: ['0%', '10%', '90%', '100%'], width: ['0%', '10%', '10%', '0%'] }}
          className={classNames(colorCls, 'r-progress-bar')}
          transition={{
            duration: 1,
            ease: 'linear',
            repeat: infinite ? Infinity : 0,
            times: [0, 0.1, 0.9, 1],
          }}
        />
        {
          blur && (
            <motion.div
              animate={
                { left: ['0%', '10%', '90%', '100%'], width: ['0%', '10%', '10%', '0%'] }
              }
              className={classNames(colorCls, 'absolute', 'r-progress-bar blur-md')}
              transition={{
                duration: 1,
                ease: 'linear',
                repeat: infinite ? Infinity : 0,
                times: [0, 0.1, 0.9, 1],
              }}
            />
          )
        }
      </>
    );
  } else if (fake) {
    progressMain = (
      <>
        <motion.div
          animate={{ width: ['0%', '10%', '12%', '80%', '80%', '95%', '99%'] }}
          className={classNames(colorCls, 'r-progress-bar')}
          transition={{
            times: [0, 0.01, 0.012, 0.2, 0.24, 0.5, 1],
            duration: durationMS === 0 ? 16 : durationMS / 1000,
          }}
        />
        {
          blur && (
            <motion.div
              animate={{ width: ['0%', '10%', '12%', '80%', '80%', '95%', '99%'] }}
              className={classNames(colorCls, 'absolute', 'r-progress-bar blur-md')}
              transition={{
                times: [0, 0.01, 0.012, 0.2, 0.24, 0.5, 1],
                duration: durationMS === 0 ? 16 : durationMS / 1000,
              }}
            />
          )
        }
      </>
    );
  } else if (durationMS) {
    progressMain = (
      <>
        <motion.div
          animate={{ width: ['0%', '100%'] }}
          className={classNames(colorCls, 'r-progress-bar')}
          transition={{
            duration: durationMS / 1000,
            ease: 'linear',
          }}
        />
        {
          blur && (
            <motion.div
              animate={{ width: ['0%', '100%'] }}
              className={classNames(colorCls, 'absolute', 'r-progress-bar blur-md')}
              transition={{
                duration: durationMS / 1000,
                ease: 'linear',
              }}
            />
          )
        }
      </>
    );
  } else {
    progressMain = (
      <>
        <motion.div
          animate={{ width: `${precent}%` }}
          className={classNames(colorCls, 'r-progress-bar', 'absolute')}
        />
        {
          blur && (
            <motion.div
              animate={{ width: `${precent}%` }}
              className={classNames(colorCls, 'absolute', 'r-progress-bar blur-md')}
            />
          )
        }
      </>
    );
  }
  return (
    <div
      className={wrapperCls}
      id={id}
      style={{
        ...style,
      }}
    >
      {progressMain}
    </div>
  );
}
