import {
  ButtonHTMLAttributes,
  CSSProperties,
  PropsWithChildren,
  ReactNode,
} from "react";
import { StylesSizeProps, StylesVariantButtonLinkProps } from "@/types";
import { PaletteConfigTypes } from "@/theme";

export interface ButtonProps
  extends StylesVariantButtonLinkProps,
    StylesSizeProps,
    PropsWithChildren,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  radius?: CSSProperties["borderRadius"];
  color?: keyof PaletteConfigTypes;
  sx?: CSSProperties;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
}
