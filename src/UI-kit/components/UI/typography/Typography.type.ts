import { HTMLAttributes, PropsWithChildren } from "react";
import {
  ColorNamesProps,
  ComponentTypographyProps,
  DefaultProps,
  SpacingPaddingOrMargin,
  VariantTypography,
} from "@/UI-kit/types";

export interface TypographyProps
  extends DefaultProps,
    ColorNamesProps,
    VariantTypography,
    ComponentTypographyProps,
    SpacingPaddingOrMargin,
    Omit<HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement>, "color">,
    PropsWithChildren {}
