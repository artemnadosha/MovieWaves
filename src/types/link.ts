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
  StylesVariantButtonLinkProps,
} from "@/types/defaultProps";
import { PaletteConfigTypes } from "@/theme";

export interface MyLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "color">,
    LinkProps,
    StylesVariantButtonLinkProps,
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
