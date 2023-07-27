import { HTMLAttributes, PropsWithChildren } from "react";

import {
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
    ComponentBoxProps,
    SpacingProps,
    SpacingPaddingOrMargin,
    DirectionProps,
    OrientingProps {}
