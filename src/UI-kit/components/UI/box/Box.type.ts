import { HTMLAttributes, PropsWithChildren } from "react";

import {
  BorderProps,
  ColorBorderProps,
  ColorNamesProps,
  ComponentBoxProps,
  DefaultProps,
  DirectionProps,
  OrientingProps,
  SpacingPaddingOrMargin,
  SpacingProps,
} from "@/UI-kit/types";

export interface BoxProps
  extends Omit<HTMLAttributes<HTMLElement>, "color">,
    PropsWithChildren,
    DefaultProps,
    ColorNamesProps,
    ColorBorderProps,
    BorderProps,
    ComponentBoxProps,
    SpacingProps,
    SpacingPaddingOrMargin,
    DirectionProps,
    OrientingProps {}
