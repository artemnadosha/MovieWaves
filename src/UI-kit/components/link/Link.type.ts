import { LinkProps } from "next/link";
import { AnchorHTMLAttributes, CSSProperties, PropsWithChildren } from "react";
import {
  ColorKeysProps,
  DefaultProps,
  IconProps,
  RadiusProps,
  SizeProps,
  VariantButtonLink,
} from "@/UI-kit/types";

export interface MyLinkProps
  extends DefaultProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "color">,
    LinkProps,
    VariantButtonLink,
    SizeProps,
    IconProps,
    RadiusProps,
    ColorKeysProps,
    PropsWithChildren {
  href: string;
}
