import {
  paletteConfig,
  PaletteConfigTypes,
  typographyConfig,
} from "@/UI-kit/theme";
import { unitSizeConfig } from "@/UI-kit/theme/unit-size.config";

interface CheckboxConfigProps {
  color?: keyof PaletteConfigTypes;
  active?: boolean;
  type?: "checkbox" | "radio";
}

export const checkboxOrRadioConfig = {
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
    border: "1px solid",
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
};

export const checkboxColorConfig = ({
  color,
  active,
  type,
}: CheckboxConfigProps) => {
  return {
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
    },
    borderRadius:
      type === "checkbox"
        ? unitSizeConfig.borderRadiusCheckbox
        : unitSizeConfig.borderRadiusRadio,
  };
};
