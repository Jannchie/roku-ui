import "./style.css";
import { ReactNode, useEffect, useRef, useState } from "react";
import { colorClass, Colors } from "../../utils/colors";
import { Tab, Transition } from "@headlessui/react";
import classNames from "classnames";

export function RTabs({
  data,
  selectedIndex,
  onChange,
  type = "indicator",
  color = "primary",
  className,
}: {
  data: {
    key: ReactNode;
    value: ReactNode;
  }[];
  selectedIndex: number;
  onChange: (index: number) => void;
  className?: string;
  type?: "fill" | "indicator";
  color?: Colors;
}) {
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
  const indicatorColor = colorClass({
    bg: color,
  });
  const textColor = colorClass({
    text: color,
  });
  return (
    <div className={className}>
      <Tab.Group selectedIndex={selectedIndex} onChange={onChange}>
        <Tab.List ref={tabList} className="r-tab-list">
          {data.map((d, i) => (
            <Tab
              key={i}
              className={({ selected }) =>
                selected
                  ? type === "indicator"
                    ? classNames(textColor)
                    : classNames("text-white", indicatorColor)
                  : ""
              }
              children={d.key}
            ></Tab>
          ))}
        </Tab.List>
        {type === "indicator" && (
          <div
            className={classNames(
              "transition-all absolute h-1 rounded-md bg-primary-500",
              indicatorColor
            )}
            style={indicatorStyle}
          ></div>
        )}
        <Tab.Panels className="r-tab-panels dark:text-white mt-2">
          {data.map((d, i) => (
            <Tab.Panel key={i}>
              <Transition
                key={i}
                show={i === selectedIndex}
                appear
                enter="transition-all ease-out duration-300"
                enterFrom="opacity-0 mt-4"
                enterTo="opacity-100 mt-0"
              >
                {d.value}
              </Transition>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
