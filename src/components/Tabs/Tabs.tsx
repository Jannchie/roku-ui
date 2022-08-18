import './Tabs.css';
import {
  ReactNode, useEffect, useRef, useState,
} from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
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
            onMouseEnter={() => {
              // onChange(i);
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
        <div className="h-0.5 dark:bg-default-800 bg-default-50">
          <div
            className={classNames('r-tab-indicator', indicatorColor)}
            style={indicatorStyle}
          />
        </div>
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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const data = getData();
  const preH = useRef('');
  const tabComps = data
    .map((d, i) => (
      <motion.div
        // eslint-disable-next-line react/no-array-index-key
        key={i}
        style={{
          display: selectedIndex === i ? 'block' : 'none',
        }}
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        onAnimationStart={() => {
          // Auto adjust tab plane height
          if (wrapperRef.current) {
            const wrapperDom = wrapperRef.current;
            if (wrapperRef.current.children.length !== 0) {
              // FIXME: If tab panel has margin, the height will be wrong.
              // TODO: We can use window.getComputedStyle to get the true margin.
              // TODO: But it will be a little bit slower, and complex.
              const childDom = wrapperDom.children[wrapperDom.children.length - 1];
              const height = childDom.scrollHeight;
              wrapperRef.current.style.height = `${height}px`;
              preH.current = wrapperDom.style.height;
            }
          }
        }}
        onAnimationComplete={() => {
          if (wrapperRef.current && wrapperRef.current.style.height !== '') {
            wrapperRef.current.style.height = '';
          }
        }}
      >
        {d.value}
      </motion.div>
    ));
  useEffect(
    () => {

    },
  );
  return (
    <div className={classNames(className, 'relative')} id={id} style={style}>
      <List
        color={color}
        data={data}
        selectedIndex={selectedIndex}
        type={type}
        onChange={(i) => {
          if (wrapperRef.current) {
            wrapperRef.current.style.height = preH.current;
          }
          onChange(i);
        }}
      />
      <div ref={wrapperRef} className="transition-all r-tab-panels dark:text-white mt-2 overflow-hidden">
        {tabComps.filter((_, i) => i === selectedIndex)}
      </div>
    </div>
  );
}

export const Tabs = Object.assign(TabsRoot, { Item });
