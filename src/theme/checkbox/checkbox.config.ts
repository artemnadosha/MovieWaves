import { paletteConfig, PaletteConfigTypes, typographyConfig } from "@/theme";
import { hexToRGBA } from "@/utils";
import { unitSizeConfig } from "@/theme/unit-size.config";

interface CheckboxConfigProps {
  color?: keyof PaletteConfigTypes;
  active?: boolean;
}

export const checkboxConfig = ({ color, active }: CheckboxConfigProps) => {
  return {
    defaultStyles: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",
      backgroundColor: "transparent",
      outline: "none",
      margin: "0",
      cursor: "pointer",
      userSelect: "none",
      verticalAlign: "middle",
      appearance: "none",
      textDecoration: "none",
      transition: "0.25s",
      borderRadius: "2px",
      border: "1px solid",
    },
    variant: {
      contained: {
        color: paletteConfig[color || "primary"].contrastText,
        background: active
          ? paletteConfig[color || "primary"].main
          : "transparent",
        borderColor: active
          ? paletteConfig[color || "primary"].main
          : paletteConfig.border.main,

        "&:hover": {
          background: active
            ? paletteConfig[color || "primary"].dark
            : "transparent",
          borderColor: active
            ? paletteConfig[color || "primary"].dark
            : paletteConfig[color || "primary"].main,
        },
        "&:active": {
          background: paletteConfig[color || "primary"].dark,
          borderColor: active
            ? paletteConfig[color || "primary"].dark
            : paletteConfig[color || "primary"].main,
        },
      },
      outlined: {
        color: active
          ? paletteConfig[color || "primary"].main
          : paletteConfig.border.main,
        background: "transparent",
        border: `1px solid`,
        borderColor: "",

        "&:hover": {
          color: active
            ? paletteConfig[color || "primary"].dark
            : paletteConfig[color || "primary"].main,
          borderColor: active
            ? paletteConfig[color || "primary"].dark
            : paletteConfig[color || "primary"].main,
        },
        "&:active": {
          color: active
            ? paletteConfig[color || "primary"].dark
            : paletteConfig[color || "primary"].main,
          borderColor: active
            ? paletteConfig[color || "primary"].dark
            : paletteConfig[color || "primary"].main,
        },
      },
      text: {
        color: "",
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
    size: {
      small: {
        ...typographyConfig.variant.p,
      },
      medium: {
        ...typographyConfig.variant.h6,
      },
      large: {
        ...typographyConfig.variant.h5,
      },
    },
    borderRadius: unitSizeConfig.borderRadius,
  };
};
