import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import {
  ColorKeysProps,
  DefaultProps,
  IconProps,
  RadiusProps,
  SizeProps,
  VariantButtonLink,
} from "@/UI-kit/types";

export interface ButtonProps
  extends DefaultProps,
    VariantButtonLink,
    SizeProps,
    PropsWithChildren,
    ColorKeysProps,
    IconProps,
    ColorKeysProps,
    RadiusProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {}
