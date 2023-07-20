import {
  ButtonHTMLAttributes,
  CSSProperties,
  PropsWithChildren,
  ReactNode,
} from "react";
import { StylesSizeProps, StylesVariantProps } from "@/types";
import { PaletteConfigTypes } from "@/theme";

export interface ButtonProps
  extends StylesVariantProps,
    StylesSizeProps,
    PropsWithChildren,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  radius?: CSSProperties["borderRadius"];
  color?: keyof PaletteConfigTypes;
  sx?: CSSProperties;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
}
