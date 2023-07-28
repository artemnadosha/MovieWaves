import {
  buttonColorConfig,
  buttonConfig,
  checkboxColorConfig,
  checkboxOrRadioConfig,
  linkColorConfig,
  PaletteConfigTypes,
} from "../theme";
import {
  SizeProps,
  VariantButton,
  VariantCheckbox,
  VariantLink,
} from "../types";

type SeparationVariantButtonType = VariantButton & {
  color?: keyof PaletteConfigTypes;
  active?: boolean;
};

type SeparationVariantLinkType = VariantLink & {
  color?: keyof PaletteConfigTypes;
  active?: boolean;
};

type SeparationVariantCheckboxType = VariantCheckbox & {
  color?: keyof PaletteConfigTypes;
  active?: boolean;
};

const variantButton = ({
  variant,
  color,
  active,
}: SeparationVariantButtonType) => {
  const separation = buttonColorConfig({ color, active });

  if (variant === "outlined") return separation.variant.outlined;
  if (variant === "text") return separation.variant.text;

  return separation.variant.contained;
};

const sizeButton = ({ size }: SizeProps) => {
  if (size === "small") return buttonConfig.size.small;
  if (size === "large") return buttonConfig.size.large;

  return buttonConfig.size.medium;
};

const variantLink = ({ variant, color, active }: SeparationVariantLinkType) => {
  if (variant !== "tab") {
    return variantButton({ color, active, variant });
  }
  return linkColorConfig({ active, color }).variant.tab;
};

const sizeCheckboxOrRadio = ({ size }: SizeProps) => {
  if (size === "large") return checkboxOrRadioConfig.size.large;
  if (size === "medium") return checkboxOrRadioConfig.size.medium;

  return checkboxOrRadioConfig.size.small;
};

const variantCheckbox = ({
  variant,
  color,
  active,
}: SeparationVariantCheckboxType) => {
  const separation = checkboxColorConfig({ color, active });

  if (variant === "outlined") return separation.variant.outlined;

  return separation.variant.contained;
};

export const separation = {
  variantButton,
  variantLink,
  sizeButton,
  variantCheckbox,
  sizeCheckboxOrRadio,
};
