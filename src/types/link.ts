import { LinkProps } from "next/link";
import {
  AnchorHTMLAttributes,
  CSSProperties,
  PropsWithChildren,
  ReactNode,
} from "react";
import {
  DefaultProps,
  StylesColorProps,
  StylesSizeProps,
  StylesVariantProps,
} from "@/types/defaultProps";
import { PaletteConfigTypes } from "@/theme";

export interface MyLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "color">,
    LinkProps,
    StylesVariantProps,
    StylesSizeProps,
    PropsWithChildren,
    DefaultProps,
    StylesColorProps {
  href: string;
  radius?: CSSProperties["borderRadius"];
  color?: keyof PaletteConfigTypes;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
}
