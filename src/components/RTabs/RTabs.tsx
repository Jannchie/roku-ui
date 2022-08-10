import "./style.css";
import { FC, forwardRef, ReactNode, useEffect, useRef, useState } from "react";
import { colorClass, Colors } from "../../utils/colors";
import { Transition } from "@headlessui/react";
import classNames from "classnames";
import { TransitionMotion, spring } from "react-motion";

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
            onClick={() => {
              onChange(i);
            }}
            key={i}
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
      <div className="r-tab-panels dark:text-white mt-2 h-32">
        {data.map((d, i) => (
          <Transition
            key={i}
            show={i === selectedIndex}
            appear
            enter="transition-all ease-out duration-300 absolute delay-300"
            enterFrom="opacity-0 mt-4"
            enterTo="opacity-100 mt-0"
            leave="transition-all ease-in duration-300 absolute"
            leaveFrom="opacity-100 mt-0"
            leaveTo="opacity-0 mt-4"
          >
            {d.value}
          </Transition>
        ))}
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
