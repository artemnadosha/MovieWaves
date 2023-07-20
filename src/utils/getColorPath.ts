import {
  paletteConfig,
  PaletteConfigTypes,
  PaletteName,
  PaletteType,
} from "@/theme";

import { CSSProperties } from "react";

interface getColorPathProps {
  color?: PaletteName;
}

interface getColorPathReturn {
  parent: keyof PaletteConfigTypes;
  child?: keyof PaletteType;
}

export const getColorPath = (color: PaletteName): getColorPathReturn => {
  if (color?.includes(".")) {
    const separation = color.split(".");
    return {
      parent: separation[0] as keyof PaletteConfigTypes,
      child: separation[1] as keyof PaletteType,
    };
  } else {
    return { parent: color as keyof PaletteConfigTypes };
  }
};

export const getColor = ({
  color,
}: getColorPathProps): PaletteType | CSSProperties["color"] => {
  if (!color) return "inherit";

  const colorPath = getColorPath(color);

  if (colorPath.child) {
    const { main, ...rest } = paletteConfig[colorPath.parent];
    return {
      main,
      ...rest,
    };
  } else {
    return paletteConfig[colorPath.parent];
  }
};
