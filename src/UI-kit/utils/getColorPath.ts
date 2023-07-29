import {
  paletteLightConfig,
  PaletteConfigType,
  PaletteName,
  PaletteType,
  ThemeType,
} from "../theme";

import { CSSProperties } from "react";

interface getColorPathProps {
  color?: PaletteName;
  theme: ThemeType;
}

interface getColorPathReturn {
  parent: keyof PaletteConfigType;
  child?: keyof PaletteType;
}

export const getColorPath = (color: PaletteName): getColorPathReturn => {
  if (color?.includes(".")) {
    const separation = color.split(".");
    return {
      parent: separation[0] as keyof PaletteConfigType,
      child: separation[1] as keyof PaletteType,
    };
  } else {
    return { parent: color as keyof PaletteConfigType };
  }
};

export const getColor = ({
  color,
  theme,
}: getColorPathProps): PaletteType | CSSProperties["color"] => {
  if (!color) return "inherit";

  const colorPath = getColorPath(color);

  if (colorPath.child) {
    const { main, ...rest } = theme.palette[colorPath.parent];
    return {
      ...rest,
      main: theme.palette[colorPath.parent][colorPath.child],
    };
  } else {
    return theme.palette[colorPath.parent];
  }
};
