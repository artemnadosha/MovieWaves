import { CSSProperties } from "react";
import { PaletteName } from "@/theme";

export interface StylesProps {
  sx?: CSSProperties;
}

export interface StylesColorProps {
  color?: PaletteName;
}

export interface StylesVariantButtonLinkProps {
  variant?: "contained" | "outlined" | "text";
}

export interface StylesVariantCheckboxProps {
  variant?: "contained" | "outlined";
}

export interface StylesSizeProps {
  size?: "small" | "medium" | "large";
}

export interface DefaultProps extends StylesProps {}
