import {
  buttonColorConfig,
  buttonConfig,
  checkboxColorConfig,
  checkboxOrRadioConfig,
  PaletteConfigTypes,
} from "../theme";
import {
  StylesSizeProps,
  StylesVariantButtonLinkProps,
  StylesVariantCheckboxProps,
} from "../types";

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
    return buttonColorConfig({ color, active }).variant.outlined;
  if (variant === "text")
    return buttonColorConfig({ color, active }).variant.text;

  return buttonColorConfig({ color, active }).variant.contained;
};

const sizeButton = ({ size }: StylesSizeProps) => {
  if (size === "small") return buttonConfig.size.small;
  if (size === "large") return buttonConfig.size.large;

  return buttonConfig.size.medium;
};

const sizeCheckboxOrRadio = ({ size }: StylesSizeProps) => {
  if (size === "large") return checkboxOrRadioConfig.size.large;
  if (size === "medium") return checkboxOrRadioConfig.size.medium;

  return checkboxOrRadioConfig.size.small;
};

const variantCheckbox = ({
  variant,
  color,
  active,
}: SeparationVariantCheckboxType) => {
  if (variant === "outlined")
    return checkboxColorConfig({ color, active }).variant.outlined;

  return checkboxColorConfig({ color, active }).variant.contained;
};

export const separation = {
  variantButton,
  sizeButton,
  variantCheckbox,
  sizeCheckboxOrRadio,
};
