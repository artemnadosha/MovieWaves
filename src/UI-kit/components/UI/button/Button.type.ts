import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import {
  ColorKeysProps,
  DefaultProps,
  IconProps,
  RadiusProps,
  SizeProps,
  VariantButton,
} from "@/UI-kit/types";

export interface ButtonProps
  extends DefaultProps,
    VariantButton,
    SizeProps,
    PropsWithChildren,
    ColorKeysProps,
    IconProps,
    RadiusProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {}
