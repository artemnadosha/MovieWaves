import { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";
import { DefaultProps, StylesColorProps } from "@/types/defaultProps";
import { JSXBoxTagName } from "@/types/JSXTagName";

export interface BoxProps
  extends Omit<HTMLAttributes<HTMLElement>, "color">,
    PropsWithChildren,
    DefaultProps,
    StylesColorProps {
  component?: JSXBoxTagName;
  spacing?: number | string;
  direction?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
}
