import { ButtonProps, StylesSizeProps, StylesVariantProps } from "@/types";
import styled from "styled-components";
import { buttonConfig, PaletteConfigTypes } from "@/theme";

type separationVariantType = StylesVariantProps & {
  color?: keyof PaletteConfigTypes;
};

const separationVariant = ({ variant, color }: separationVariantType) => {
  if (variant === "outlined") return buttonConfig(color).variant.outlined;
  if (variant === "text") return buttonConfig(color).variant.text;

  return buttonConfig(color).variant.contained;
};

const separationSize = ({ size }: StylesSizeProps) => {
  if (size === "small") return buttonConfig().size.small;
  if (size === "large") return buttonConfig().size.large;

  return buttonConfig().size.medium;
};

const Button = styled(
  ({ variant, size, sx, color, radius, children, ...rest }: ButtonProps) => {
    return <button {...rest}>{children}</button>;
  }
)(({ variant, size, radius, sx, color }) => {
  let stylesComponent = {};

  if (sx) {
    stylesComponent = sx;
  }

  return {
    fontFamily: "inherit",
    border: "none",
    outline: "none",
    margin: 0,
    cursor: "pointer",
    ...separationVariant({ variant, color }),
    ...separationSize({ size }),
    borderRadius: radius?.toString() || buttonConfig().borderRadius,
    ...stylesComponent,
  };
});

export default Button;
