import { ReactNode } from "react";

export type RModalProps = {
  children?: ReactNode;
  show?: boolean;
  hide?: () => void;
  background?: boolean;
  className?: string;
};
