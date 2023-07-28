import { paletteConfig, PaletteConfigTypes } from "@/UI-kit/theme";

interface LinkColorConfigProps {
  color?: keyof PaletteConfigTypes;
  active?: boolean;
}

export const linkColorConfig = ({ color, active }: LinkColorConfigProps) => {
  const activeBackgroundColor = active
    ? paletteConfig[color || "primary"].main
    : "transparent";

  const activeColor = active
    ? paletteConfig[color || "primary"].contrastText
    : paletteConfig[color || "primary"].main;

  return {
    variant: {
      tab: {
        color: activeColor,
        background: activeBackgroundColor,
        justifyContent: "flex-start",

        "&:hover": {
          color: paletteConfig[color || "primary"].contrastText,
          background: paletteConfig[color || "primary"].main,
        },
        "&:active": {
          color: paletteConfig[color || "primary"].contrastText,
          background: paletteConfig[color || "primary"].main,
        },
      },
    },
  };
};
