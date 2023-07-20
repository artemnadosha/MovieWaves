import { CSSProperties } from "react";
import { PaletteName } from "@/theme";

export interface StylesProps {
  sx?: CSSProperties;
}

export interface StylesColorProps {
  color?: PaletteName;
}

export interface StylesVariantProps {
  variant?: "contained" | "outlined" | "text";
}

export interface StylesSizeProps {
  size?: "small" | "medium" | "large";
}

export interface DefaultProps extends StylesProps {}
