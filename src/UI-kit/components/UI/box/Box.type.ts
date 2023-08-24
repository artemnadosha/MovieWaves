import { HTMLAttributes, PropsWithChildren, RefObject } from "react";

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
  extends PropsWithChildren,
    DefaultProps,
    ColorNamesProps,
    ColorBorderProps,
    BorderProps,
    ComponentBoxProps,
    SpacingProps,
    SpacingPaddingOrMargin,
    DirectionProps,
    OrientingProps {}

// Omit<HTMLAttributes<HTMLElement>, "color">;
