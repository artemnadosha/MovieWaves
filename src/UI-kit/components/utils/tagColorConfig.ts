import { css } from "styled-components";
import { hexToRGBA } from "@/UI-kit/utils";
import { PaletteConfigType, ThemeType } from "@/UI-kit/theme";

interface TagConfigProps {
  color?: keyof PaletteConfigType;
  theme: ThemeType;
}

export const tagColorConfig = ({ color, theme }: TagConfigProps) => {
  const colorPath = theme.palette[color || "primary"];

  return {
    contained: css({
      color: colorPath.contrastText,
      background: colorPath.main,
    }),
    outlined: css({
      color: colorPath.main,
      background: "transparent",
      border: `1px solid`,
      borderColor: colorPath.main,
    }),
    text: css({
      color: colorPath.main,
      background: "transparent",
    }),
    defaultText: css({
      color: colorPath.contrastText,
      background: "transparent",
      padding: 0,
    }),
  };
};
