import { PaletteConfigType, ThemeType } from "@/UI-kit/theme";
import { hexToRGBA } from "@/UI-kit/utils";
import { css } from "styled-components";
import { SizeProps } from "@/UI-kit/types";
import { equalSidesStyles } from "./equalSidesStyles";

interface ButtonConfigProps extends SizeProps {
  color?: keyof PaletteConfigType;
  active?: boolean;
  equalSides?: boolean;
  theme: ThemeType;
}

export const buttonColorConfig = ({
  color,
  active,
  equalSides,
  size,
  theme,
}: ButtonConfigProps) => {
  const colorPath = theme.palette[color || "primary"];

  const activeColor = active ? colorPath.dark : colorPath.main;
  const defaultActiveColor = active ? colorPath.main : colorPath.additional;

  const separationEqualSides = equalSides
    ? equalSidesStyles[size || "medium"]
    : css``;

  return {
    contained: css(
      {
        color: colorPath.contrastText,
        background: activeColor,

        "&:hover": {
          background: colorPath.dark,
        },
        "&:active": {
          background: colorPath.dark,
        },
        "&:disabled": {
          color: colorPath.disabled,
          pointerEvents: "none",
        },
      },
      separationEqualSides
    ),
    outlined: css(
      {
        color: activeColor,
        background: "transparent",
        border: `1px solid`,
        borderColor: activeColor,

        "&:hover": {
          color: colorPath.dark,
          borderColor: colorPath.dark,
        },
        "&:active": {
          borderColor: colorPath.dark,
        },
        "&:disabled": {
          color: colorPath.disabled,
          pointerEvents: "none",
        },
      },
      separationEqualSides
    ),
    text: css(
      {
        color: activeColor,
        background: "transparent",

        "&:hover": {
          background: !active ? hexToRGBA(colorPath.light, 0.3) : "",
          color: !active ? colorPath.main : "",
        },
        "&:active": {
          background: !active ? hexToRGBA(colorPath.light, 0.3) : "",
          color: !active ? colorPath.main : "",
        },
        "&:disabled": {
          color: colorPath.disabled,
          pointerEvents: "none",
        },
      },
      separationEqualSides
    ),
    defaultText: css(
      {
        color: defaultActiveColor,
        background: "transparent",
        padding: 0,

        "&:hover": {
          color: !active ? colorPath.main : "",
        },
        "&:disabled": {
          color: colorPath.disabled,
          pointerEvents: "none",
        },
      },
      separationEqualSides
    ),
  };
};
