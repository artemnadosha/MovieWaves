import { LinkProps } from "next/link";
import { AnchorHTMLAttributes, PropsWithChildren } from "react";
import {
  ColorKeysProps,
  DefaultProps,
  IconProps,
  RadiusProps,
  SizeProps,
  SpacingPaddingOrMargin,
  VariantLink,
} from "@/UI-kit/types";

export interface MyLinkProps
  extends DefaultProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "color">,
    LinkProps,
    VariantLink,
    SizeProps,
    IconProps,
    RadiusProps,
    ColorKeysProps,
    SpacingPaddingOrMargin,
    PropsWithChildren {
  href: string;
}
