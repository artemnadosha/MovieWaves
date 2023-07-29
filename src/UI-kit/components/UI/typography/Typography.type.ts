import { HTMLAttributes, PropsWithChildren } from "react";
import {
  ColorNamesProps,
  ComponentTypographyProps,
  DefaultProps,
  VariantTypography,
} from "@/UI-kit/types";

export interface TypographyProps
  extends DefaultProps,
    ColorNamesProps,
    Required<VariantTypography>,
    ComponentTypographyProps,
    Omit<HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement>, "color">,
    PropsWithChildren {}
