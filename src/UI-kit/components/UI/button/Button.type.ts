import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import {
  ActiveProps,
  ColorKeysProps,
  DefaultProps,
  EqualSidesProps,
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
    EqualSidesProps,
    ActiveProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {}
