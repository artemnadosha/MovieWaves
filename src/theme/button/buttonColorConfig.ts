import { paletteConfig, PaletteConfigTypes, typographyConfig } from "@/theme";
import { unitSizeConfig } from "@/theme/unit-size.config";
import { hexToRGBA } from "@/utils";

interface ButtonConfigProps {
  color?: keyof PaletteConfigTypes;
  active?: boolean;
}

export const buttonConfig = {
  defaultStyles: {
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

export const buttonColorConfig = ({ color, active }: ButtonConfigProps) => {
  const activeColor = active
    ? paletteConfig[color || "primary"].dark
    : paletteConfig[color || "primary"].main;

  return {
    variant: {
      contained: {
        color: paletteConfig[color || "primary"].contrastText,
        background: activeColor,

        "&:hover": {
          background: paletteConfig[color || "primary"].dark,
        },
        "&:active": {
          background: paletteConfig[color || "primary"].dark,
        },
      },
      outlined: {
        color: activeColor,
        background: "transparent",
        border: `1px solid`,
        borderColor: activeColor,

        "&:hover": {
          color: paletteConfig[color || "primary"].dark,
          borderColor: paletteConfig[color || "primary"].dark,
        },
        "&:active": {
          borderColor: paletteConfig[color || "primary"].dark,
        },
      },
      text: {
        color: activeColor,
        background: "transparent",

        "&:hover": {
          background: !active
            ? hexToRGBA(paletteConfig[color || "primary"].light, 0.3)
            : "",
          color: !active ? paletteConfig[color || "primary"].main : "",
        },
        "&:active": {
          background: !active
            ? hexToRGBA(paletteConfig[color || "primary"].light, 0.3)
            : "",
          color: !active ? paletteConfig[color || "primary"].main : "",
        },
      },
    },
  };
};
