import { ColorKeysProps } from "@/UI-kit/types";
import { ThemeType } from "@/UI-kit";

interface InputColorConfig extends ColorKeysProps {
  theme: ThemeType;
  focus?: boolean;
}

export const inputColorConfig = ({ color, focus, theme }: InputColorConfig) => {
  const colorPath = theme.palette[color || "primary"];
  return {
    contained: {
      color: colorPath.dark,
      borderColor: colorPath.main,
      background: colorPath.additional,
    },
    outlined: {
      color: focus ? colorPath.contrastText : colorPath.additionalText,
      borderColor: focus ? colorPath.main : colorPath.additionalText,
      background: "transparent",

      "&:hover > *": {
        borderColor: !focus && colorPath.additional,
        color: !focus && colorPath.additional,
      },
    },
  };
};
