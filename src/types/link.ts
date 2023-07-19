import { LinkProps } from "next/link";
import React, { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { PaletteName } from "@/theme";
import { TypographyProps } from "@/types/typography";

export interface MyLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    LinkProps,
    PropsWithChildren {
  href: string;
  color?: PaletteName;
  typography?: TypographyProps;
  active?: boolean;
}
