// import "./style.css";
import { ReactNode, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { colorClass } from "../../utils/colors";
import { RBtn } from "../RBtn";
import { Tab } from "@headlessui/react";
type RTabContainerProps = {
  className?: string;
  children?: ReactNode;
  activeIndex?: number;
};
type RTabItemProps = {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
};
function Container({ className, children, activeIndex }: RTabContainerProps) {
  return (
    <div className={classNames("r-tab-container", className)}>{children}</div>
  );
}

function Item({ className, children, onClick }: RTabItemProps) {
  return <RBtn className="r-tab-item">{children}</RBtn>;
}

export function RTabs({
  data,
  type = "indicator",
  className,
}: {
  data: {
    key: ReactNode;
    value: ReactNode;
    selected?: boolean;
  }[];
  className?: string;
  type?: "fill" | "indicator";
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabList = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<{
    width: number;
    left: number;
  }>({ width: 0, left: 0 });
  useEffect(() => {
    if (tabList.current) {
      const tabBtn = tabList.current.children[
        selectedIndex
      ] as HTMLButtonElement;
      setIndicatorStyle(() => ({
        width: tabBtn.offsetWidth,
        left: tabBtn.offsetLeft,
      }));
    }
  }, [selectedIndex]);
  return (
    <div className={className}>
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List
          ref={tabList}
          className="r-tab-list text-sm child:transition-all dark:text-white child:rounded child:px-2 child:py-1 child:outline-none"
        >
          {data.map((d, i) => (
            <Tab
              key={i}
              className={({ selected }) =>
                selected
                  ? type === "indicator"
                    ? "text-primary-500"
                    : "bg-primary-500 text-white"
                  : ""
              }
              children={d.key}
            ></Tab>
          ))}
        </Tab.List>
        {type === "indicator" && (
          <div
            className="transition-all absolute h-1 rounded-md bg-primary-500"
            style={indicatorStyle}
          ></div>
        )}
        <Tab.Panels className="r-tab-panels dark:text-white mt-2">
          {data.map((d, i) => (
            <Tab.Panel key={i} children={d.value}></Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export const RTab = {
  Container,
  Item,
};
