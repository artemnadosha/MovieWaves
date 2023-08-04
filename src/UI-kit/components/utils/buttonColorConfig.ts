import { PaletteConfigType, ThemeType } from "@/UI-kit/theme";
import { hexToRGBA } from "@/UI-kit/utils";
import { css } from "styled-components";

interface ButtonConfigProps {
  color?: keyof PaletteConfigType;
  active?: boolean;
  theme: ThemeType;
}

export const buttonColorConfig = ({
  color,
  active,
  theme,
}: ButtonConfigProps) => {
  const colorPath = theme.palette[color || "primary"];

  const activeColor = active ? colorPath.dark : colorPath.main;
  const defaultActiveColor = active ? colorPath.main : colorPath.additional;

  return {
    contained: css({
      color: colorPath.contrastText,
      background: activeColor,

      "&:hover": {
        background: colorPath.dark,
      },
      "&:active": {
        background: colorPath.dark,
      },
    }),
    outlined: css({
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
    }),
    text: css({
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
    }),
    defaultText: css({
      color: defaultActiveColor,
      background: "transparent",
      padding: 0,
      "&:hover": {
        color: !active ? colorPath.main : "",
      },
    }),
  };
};
