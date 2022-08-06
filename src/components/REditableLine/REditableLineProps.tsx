import { ReactNode } from "react";

export type REditableLineProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  okBtnContent?: ReactNode;
  cancelBtnContent?: ReactNode;
  className?: string;
  textAligin?: "left" | "center" | "right";
  borderType?: "dash" | "solid" | "dot";
  onOK?: (value: string) => void;
};
