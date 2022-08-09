import "./style.css";
import { ReactNode } from "react";
import classNames from "classnames";
import { colorClass } from "../../utils/colors";
import { RBtn } from "../RBtn";
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
  return <div className="r-tab-container">{children}</div>;
}

function Item({ className, children, onClick }: RTabItemProps) {
  return <RBtn className="r-tab-item">{children}</RBtn>;
}

export const RTab = {
  Container,
  Item,
};
