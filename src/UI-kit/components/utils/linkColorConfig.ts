import { PaletteConfigType, ThemeType } from "@/UI-kit/theme";
import { css } from "styled-components";

interface LinkColorConfigProps {
  color?: keyof PaletteConfigType;
  active?: boolean;
  theme: ThemeType;
}

export const linkColorConfig = ({
  color,
  active,
  theme,
}: LinkColorConfigProps) => {
  const colorPath = theme.palette[color || "primary"];
  const activeBackgroundColor = active ? colorPath.main : "transparent";

  const activeColor = active ? colorPath.contrastText : "inherit";

  return {
    tab: css({
      color: activeColor,
      background: activeBackgroundColor,
      justifyContent: "flex-start",

      "&:hover": {
        color: colorPath.contrastText,
        background: colorPath.main,
      },
      "&:active": {
        color: colorPath.contrastText,
        background: colorPath.main,
      },
    }),
  };
};
