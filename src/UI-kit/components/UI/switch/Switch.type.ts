import { ColorKeysProps } from "@/UI-kit/types";
import { ReactElement, ReactNode } from "react";

export interface SwitchProps extends ColorKeysProps {
  iconOn?: ReactNode | ReactElement;
  iconOff?: ReactNode | ReactElement;
  onChange?: (value: boolean) => void;
  defaultValue?: boolean;
}
