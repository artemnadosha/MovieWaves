import { PaletteConfigType, ThemeType } from "@/UI-kit/theme";

interface CheckboxConfigProps {
  color?: keyof PaletteConfigType;
  active?: boolean;
  theme: ThemeType;
}

export const checkboxOrRadioConfig = {
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
};

export const checkboxColorConfig = ({
  color,
  active,
  theme,
}: CheckboxConfigProps) => {
  const colorPath = theme.palette[color || "primary"];

  const activeColor = active ? colorPath.dark : colorPath.main;

  return {
    contained: {
      color: colorPath.contrastText,
      background: active ? colorPath.main : "transparent",
      borderColor: active ? colorPath.main : theme.palette.border.main,

      "&:hover": {
        background: active ? colorPath.dark : "transparent",
        borderColor: activeColor,
      },
      "&:active": {
        background: colorPath.dark,
        borderColor: activeColor,
      },
    },
    outlined: {
      color: active ? colorPath.main : theme.palette.border.main,
      background: "transparent",
      border: `1px solid`,
      borderColor: "",

      "&:hover": {
        color: activeColor,
        borderColor: activeColor,
      },
      "&:active": {
        color: activeColor,
        borderColor: activeColor,
      },
    },
  };
};
