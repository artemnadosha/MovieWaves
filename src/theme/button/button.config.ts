import { paletteConfig, PaletteConfigTypes, typographyConfig } from "@/theme";
import { unitSizeConfig } from "@/theme/unit-size.config";
import { hexToRGBA } from "@/utils";

export const buttonConfig = (color?: keyof PaletteConfigTypes) => {
  return {
    variant: {
      contained: {
        transition: ".25s",
        color: paletteConfig[color || "primary"].contrastText,
        background: paletteConfig[color || "primary"].main,
        "&:hover": {
          background: paletteConfig[color || "primary"].dark,
        },
        "&:active": {
          background: paletteConfig[color || "primary"].dark,
        },
      },
      outlined: {
        transition: ".25s",
        color: paletteConfig[color || "primary"].main,
        background: "transparent",
        border: `1px solid ${paletteConfig[color || "primary"].main}`,
        "&:hover": {
          color: paletteConfig[color || "primary"].dark,
          borderColor: paletteConfig[color || "primary"].dark,
        },
        "&:active": {
          borderColor: paletteConfig[color || "primary"].dark,
        },
      },
      text: {
        transition: ".25s",
        color: paletteConfig[color || "primary"].main,
        background: "transparent",
        "&:hover": {
          background: hexToRGBA(paletteConfig[color || "primary"].light, 0.3),
          color: paletteConfig[color || "primary"].dark,
        },
        "&:active": {
          background: hexToRGBA(paletteConfig[color || "primary"].light, 0.3),
          color: paletteConfig[color || "primary"].dark,
        },
      },
    },
    size: {
      small: {
        ...typographyConfig.variant.p,
        padding: "4px 10px",
      },
      medium: {
        ...typographyConfig.variant.h6,
        padding: "6px 16px",
      },
      large: {
        ...typographyConfig.variant.h5,
        padding: "8px 22px",
      },
    },
    borderRadius: unitSizeConfig.borderRadius,
  };
};
