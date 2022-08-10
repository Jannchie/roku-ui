import "./style.css";
import { FC, forwardRef, ReactNode, useEffect, useRef, useState } from "react";
import { colorClass, Colors } from "../../utils/colors";
import { Transition } from "@headlessui/react";
import classNames from "classnames";
import { TransitionMotion, spring } from "react-motion";
import { Flipped, Flipper } from "react-flip-toolkit";

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
  }>({ width: 0, left: 0 });
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
          width: tabBtn.offsetWidth,
          left: tabBtn.offsetLeft,
        }));
      }
    }
  }, [selectedIndex]);
  return (
    <>
      <div ref={tabList} className="r-tab-list">
        {data.map((d, i) => (
          <button
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
            key={i}
            aria-selected={selectedIndex === i}
            tabIndex={-1}
            role="tab"
            onClick={() => {
              onChange(i);
            }}
            className={
              i === selectedIndex
                ? type === "indicator"
                  ? classNames(textColor)
                  : classNames("text-white", indicatorColor)
                : ""
            }
            children={d.key}
          ></button>
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
  selectedIndex: number;
  onChange: (index: number) => void;
  className?: string;
  type?: "fill" | "indicator";
  color?: Colors;
  children: ReactNode;
};

export function RTabRoot(props: RTabsProps) {
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
        data={data}
        type={type}
        color={color}
        selectedIndex={selectedIndex}
        onChange={onChange}
      />
      <div className="r-tab-panels dark:text-white mt-2">
        <Flipper flipKey={`${selectedIndex}`}>
          <Flipped flipId="1">
            <div>
              {data
                .filter((d, i) => i === selectedIndex)
                .map((d, i) => (
                  <>{d.value}</>
                ))}
            </div>
          </Flipped>
        </Flipper>
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

export const RTabs = Object.assign(RTabRoot, { Item, List });
