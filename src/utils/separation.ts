import { buttonConfig, PaletteConfigTypes } from "@/theme";
import { StylesSizeProps, StylesVariantProps } from "@/types";

type SeparationVariantType = StylesVariantProps & {
  color?: keyof PaletteConfigTypes;
  active?: boolean;
};

const variant = ({ variant, color, active }: SeparationVariantType) => {
  if (variant === "outlined")
    return buttonConfig({ color, active }).variant.outlined;
  if (variant === "text") return buttonConfig({ color, active }).variant.text;

  return buttonConfig({ color, active }).variant.contained;
};

const size = ({ size }: StylesSizeProps) => {
  if (size === "small") return buttonConfig({}).size.small;
  if (size === "large") return buttonConfig({}).size.large;

  return buttonConfig({}).size.medium;
};

export const separation = {
  variant,
  size,
};
