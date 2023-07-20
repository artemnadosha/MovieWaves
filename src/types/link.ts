import { LinkProps } from "next/link";
import React, {
  AnchorHTMLAttributes,
  CSSProperties,
  PropsWithChildren,
} from "react";
import { TypographyProps } from "@/types/typography";
import { DefaultProps, StylesColorProps } from "@/types/defaultProps";

export interface MyLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "color">,
    LinkProps,
    PropsWithChildren,
    DefaultProps,
    StylesColorProps {
  href: string;
  typography?: TypographyProps;
  active?: boolean;
}
