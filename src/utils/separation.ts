import { buttonConfig, checkboxConfig, PaletteConfigTypes } from "@/theme";
import {
  StylesSizeProps,
  StylesVariantButtonLinkProps,
  StylesVariantCheckboxProps,
} from "@/types";

type SeparationVariantButtonType = StylesVariantButtonLinkProps & {
  color?: keyof PaletteConfigTypes;
  active?: boolean;
};

type SeparationVariantCheckboxType = StylesVariantCheckboxProps & {
  color?: keyof PaletteConfigTypes;
  active?: boolean;
};

const variantButton = ({
  variant,
  color,
  active,
}: SeparationVariantButtonType) => {
  if (variant === "outlined")
    return buttonConfig({ color, active }).variant.outlined;
  if (variant === "text") return buttonConfig({ color, active }).variant.text;

  return buttonConfig({ color, active }).variant.contained;
};

const sizeButton = ({ size }: StylesSizeProps) => {
  if (size === "small") return buttonConfig({}).size.small;
  if (size === "large") return buttonConfig({}).size.large;

  return buttonConfig({}).size.medium;
};
const sizeCheckbox = ({ size }: StylesSizeProps) => {
  if (size === "large") return checkboxConfig({}).size.large;
  if (size === "medium") return checkboxConfig({}).size.medium;

  return checkboxConfig({}).size.small;
};

const variantCheckbox = ({
  variant,
  color,
  active,
}: SeparationVariantCheckboxType) => {
  if (variant === "outlined")
    return checkboxConfig({ color, active }).variant.outlined;

  return checkboxConfig({ color, active }).variant.contained;
};

export const separation = {
  variantButton,
  sizeButton,
  variantCheckbox,
  sizeCheckbox,
};
