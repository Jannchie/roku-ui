import './Tabs.css';
import {
  ReactNode, useEffect, useRef, useState,
} from 'react';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { Colors, colorClass } from '../..';
import { BaseProps } from '../../utils/type';

// eslint-disable-next-line react/no-unused-prop-types
function Item({ children }: { label: ReactNode; children?: ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}

function List({
  data,
  color,
  type,
  selectedIndex,
  onChange,
}: {
  data: {
    key: ReactNode;
    value: ReactNode;
  }[];
  selectedIndex: number;
  color: Colors;
  type: 'fill' | 'indicator';
  onChange: (index: number) => void;
}) {
  const tabList = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<{
    width: number;
    left: number;
  }>({ left: 0, width: 0 });
  const indicatorColor = colorClass({
    bg: color,
  });
  const textColor = colorClass({
    text: color,
  });
  useEffect(() => {
    if (tabList.current) {
      const tabBtn = tabList.current.children[
        selectedIndex
      ] as HTMLButtonElement;
      if (tabBtn) {
        setIndicatorStyle(() => ({
          left: tabBtn.offsetLeft,
          width: tabBtn.offsetWidth,
        }));
      }
    }
  }, [selectedIndex]);

  function getBtnClass(index: number) {
    let btnClass = '';
    if (index === selectedIndex) {
      if (type === 'indicator') {
        btnClass = classNames(textColor);
      } else {
        btnClass = classNames('text-white', indicatorColor);
      }
    }
    return btnClass;
  }

  return (
    <>
      <div ref={tabList} className="r-tab-list">
        {data.map((d, i) => (
          <button
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            aria-selected={selectedIndex === i}
            className={getBtnClass(i)}
            role="tab"
            tabIndex={-1}
            type="button"
            onClick={() => {
              onChange(i);
            }}
            onKeyDown={(e) => {
              switch (e.key) {
                case 'ArrowLeft':
                  onChange(
                    selectedIndex - 1 < 0 ? data.length - 1 : selectedIndex - 1,
                  );
                  break;
                case 'ArrowRight':
                  onChange(
                    selectedIndex + 1 > data.length - 1 ? 0 : selectedIndex + 1,
                  );
                  break;
                case 'ArrowUp':
                  onChange(
                    selectedIndex - 1 < 0 ? data.length - 1 : selectedIndex - 1,
                  );
                  break;
                case 'ArrowDown':
                  onChange(
                    selectedIndex + 1 > data.length - 1 ? 0 : selectedIndex + 1,
                  );
                  break;
                default:
              }
            }}
          >
            { d.key}
          </button>
        ))}
      </div>
      {type === 'indicator' && (
        <div
          className={classNames('r-tab-indicator', indicatorColor)}
          style={indicatorStyle}
        />
      )}
    </>
  );
}
type RTabsProps = {
  selectedIndex: number;
  onChange: (index: number) => void;
  type?: 'fill' | 'indicator';
  color?: Colors;
  children: ReactNode;
} & BaseProps;

export function TabsRoot(props: RTabsProps) {
  const {
    id,
    style,
    selectedIndex,
    onChange,
    type = 'indicator',
    color = 'primary',
    className,
    children,
  } = props;
  function getData() {
    const data = [];
    if ('children' in props) {
      if (children) {
        if (Array.isArray(props.children)) {
          props.children.forEach((tab) => {
            if (tab.props) {
              data.push({
                key: tab.props.label,
                value: tab.props.children,
              });
            }
          });
        } else if (typeof children === 'object' && 'props' in children) {
          if (children.props) {
            data.push({
              key: children.props.label,
              value: children.props.children,
            });
          }
        }
      }
    }
    return data;
  }
  const wrapperDiv = useRef<HTMLDivElement>(null);
  const data = getData();
  return (
    <div className={classNames(className, 'relative')} id={id} style={style}>
      <List
        color={color}
        data={data}
        selectedIndex={selectedIndex}
        type={type}
        onChange={onChange}
      />
      <div ref={wrapperDiv} className="transition-all r-tab-panels dark:text-white mt-2">
        <AnimatePresence exitBeforeEnter>
          {data
            .map((d, i) => (
              <motion.div
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                initial={{ opacity: 0, y: 10 }}
                onAnimationStart={() => {
                  // Auto adjust tab plane height
                  if (wrapperDiv.current) {
                    wrapperDiv.current.style.height = `${wrapperDiv.current.children[0].getBoundingClientRect().height}px`;
                  }
                }}
              >
                {d.value}
              </motion.div>
            ))
            .filter((_, i) => i === selectedIndex)}
        </AnimatePresence>
      </div>
    </div>
  );
}

export const Tabs = Object.assign(TabsRoot, { Item });
