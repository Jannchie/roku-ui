import "./Tabs.css";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Colors, colorClass } from "../..";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
function Item({ children }: { label: ReactNode; children?: ReactNode }) {
  return <>{children}</>;
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
  type: "fill" | "indicator";
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
  return (
    <>
      <div ref={tabList} className="r-tab-list">
        {data.map((d, i) => (
          <button
            key={i}
            aria-selected={selectedIndex === i}
            className={
              i === selectedIndex
                ? type === "indicator"
                  ? classNames(textColor)
                  : classNames("text-white", indicatorColor)
                : ""
            }
            role="tab"
            tabIndex={-1}
            onClick={() => {
              onChange(i);
            }}
            onKeyDown={(e) => {
              switch (e.key) {
              case "ArrowLeft":
                onChange(
                  selectedIndex - 1 < 0 ? data.length - 1 : selectedIndex - 1
                );
                break;
              case "ArrowRight":
                onChange(
                  selectedIndex + 1 > data.length - 1 ? 0 : selectedIndex + 1
                );
                break;
              case "ArrowUp":
                onChange(
                  selectedIndex - 1 < 0 ? data.length - 1 : selectedIndex - 1
                );
                break;
              case "ArrowDown":
                onChange(
                  selectedIndex + 1 > data.length - 1 ? 0 : selectedIndex + 1
                );
                break;
              }
            }}
          >{ d.key}</button>
        ))}
      </div>
      {type === "indicator" && (
        <div
          className={classNames("r-tab-indicator", indicatorColor)}
          style={indicatorStyle}
        ></div>
      )}
    </>
  );
}
type RTabsProps = {
  id?: string;
  selectedIndex: number;
  onChange: (index: number) => void;
  className?: string;
  type?: "fill" | "indicator";
  color?: Colors;
  children: ReactNode;
};

export function TabsRoot(props: RTabsProps) {
  const {
    selectedIndex,
    onChange,
    type = "indicator",
    color = "primary",
    className,
    children,
  } = props;
  const data = getData();
  return (
    <div className={classNames(className, "relative")}>
      <List
        color={color}
        data={data}
        selectedIndex={selectedIndex}
        type={type}
        onChange={onChange}
      />
      <div className="r-tab-panels dark:text-white mt-2">
        {data
          .map((d, i) => (
            <AnimatePresence key={`${i}`} exitBeforeEnter>
              <motion.div
                key={`${i}`}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.15 }}
              >
                {d.value}
              </motion.div>
            </AnimatePresence>
          ))
          .filter((_, i) => i === selectedIndex)}
      </div>
    </div>
  );

  function getData() {
    const data = [];
    if ("children" in props) {
      if (children) {
        if (Array.isArray(props.children)) {
          props.children.map((tab) => {
            if (tab.props) {
              data.push({
                key: tab.props.label,
                value: tab.props.children,
              });
            }
          });
        } else {
          if (typeof children === "object" && "props" in children) {
            if (children.props) {
              data.push({
                key: children.props.label,
                value: children.props.children,
              });
            }
          }
        }
      }
    }
    return data;
  }
}

export const Tabs = Object.assign(TabsRoot, { Item });
