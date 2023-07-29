import {
  paletteLightConfig,
  PaletteConfigType,
  typographyConfig,
  ThemeType,
} from "@/UI-kit/theme";
import { unitSizeConfig } from "@/UI-kit/theme/unit-size/unitSize.config";
import { hexToRGBA } from "@/UI-kit/utils";
import { CSSProperties } from "react";

interface ButtonConfigProps {
  color?: keyof PaletteConfigType;
  active?: boolean;
  theme: ThemeType;
}

export const buttonConfig = {
  fontFamily: "inherit",
  border: "none",
  outline: "none",
  margin: 0,
  userSelect: "none",
  cursor: "pointer",
  transition: ".25s",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const buttonColorConfig = ({
  color,
  active,
  theme,
}: ButtonConfigProps) => {
  const colorPath = theme.palette[color || "primary"];

  const activeColor = active ? colorPath.dark : colorPath.main;

  return {
    contained: {
      color: colorPath.contrastText,
      background: activeColor,

      "&:hover": {
        background: colorPath.dark,
      },
      "&:active": {
        background: colorPath.dark,
      },
    },
    outlined: {
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
    },
    text: {
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
    },
  };
};
