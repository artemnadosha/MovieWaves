import { PaletteConfigType, ThemeType } from "../theme";
import {
  SizeProps,
  VariantButton,
  VariantCheckbox,
  VariantLink,
} from "../types";
import {
  buttonColorConfig,
  checkboxColorConfig,
  linkColorConfig,
} from "@/UI-kit/components/theme-styles-components";
import { CSSProperties } from "react";

type CommonVariant = {
  color?: keyof PaletteConfigType;
  active?: boolean;
  theme: ThemeType;
};

type SeparationVariantButtonType = VariantButton & CommonVariant;

type SeparationVariantLinkType = VariantLink & CommonVariant;

type SeparationVariantCheckboxType = VariantCheckbox & CommonVariant;

const variantButton = ({
  variant,
  color,
  active,
  theme,
}: SeparationVariantButtonType) => {
  const separation = buttonColorConfig({ color, active, theme });

  if (variant === "outlined") return separation.outlined;
  if (variant === "text") return separation.text;

  return separation.contained;
};

const sizeButton = ({ size, theme }: SizeProps) => {
  const sizePath = theme.size;

  if (size === "small") return sizePath.small;
  if (size === "large") return sizePath.large;

  return sizePath.medium;
};

const variantLink = ({
  variant,
  color,
  active,
  theme,
}: SeparationVariantLinkType) => {
  if (variant !== "tab") {
    return variantButton({ color, active, variant, theme });
  }
  return linkColorConfig({ active, color, theme }).tab;
};

const sizeCheckboxOrRadio = ({ size, theme }: SizeProps) => {
  const pathSize = theme.size;

  if (size === "large") return pathSize.large;
  if (size === "medium") return pathSize.medium;

  return pathSize.small;
};

const variantCheckbox = ({
  variant,
  color,
  active,
  theme,
}: SeparationVariantCheckboxType) => {
  const separation = checkboxColorConfig({ color, active, theme });

  if (variant === "outlined") return separation.outlined;

  return separation.contained;
};

export const separation = {
  variantButton,
  variantLink,
  sizeButton,
  variantCheckbox,
  sizeCheckboxOrRadio,
};
