import { LinkProps } from "next/link";
import { AnchorHTMLAttributes, CSSProperties, PropsWithChildren } from "react";
import {
  ColorKeysProps,
  DefaultProps,
  DirectionHorizontalVerticalProps,
  IconProps,
  OrientingProps,
  RadiusProps,
  SizeProps,
  SpacingPaddingOrMargin,
  SpacingProps,
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

export type LinkSingleType = IconProps & {
  label: string | number;
  href: string;
};

export interface LinkGroupProps
  extends Omit<MyLinkProps, "href">,
    DirectionHorizontalVerticalProps,
    OrientingProps,
    SpacingProps {
  dataLink?: LinkSingleType[];
}
