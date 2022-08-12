import './Progress.css';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { BaseProps } from '../../utils/type';
import { colorClass, Colors, isColor } from '../..';

type ProgressProps = {
  color?: Colors | string;
  total?: number;
  value?: number;
  infinite?: boolean;
  blur?: boolean;
} & BaseProps;
export function Progress({
  color = 'primary',
  total = 100,
  value = 0,
  infinite = false,
  blur = false,
  id,
  className,
  style,
}: ProgressProps) {
  let colorCls:string | undefined;
  if (isColor(color)) {
    colorCls = colorClass({ bg: color });
  }
  const wrapperCls = classNames(className, colorCls, 'r-progress-wrapper dark:bg-zinc-800 bg-zinc-50');
  let precent = 25;
  if (!infinite) {
    precent = Math.min((value / total) * 100, 100);
  }
  return (
    <div
      className={wrapperCls}
      id={id}
      style={{
        ...style,
      }}
    >
      {
        infinite ? (
          <>
            <motion.div
              animate={
                { left: ['0%', '10%', '90%', '100%'], width: ['0%', '10%', '10%', '0%'] }
              }
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
        ) : (
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
        )

      }

    </div>
  );
}
