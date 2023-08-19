import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "@/UI-kit";

const THEMES = {
  light: lightTheme,
  dark: darkTheme,
};
const GlobalCSS = {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
};

export const withTheme = (Story, context) => {
  const { theme } = context.globals;

  return (
    <ThemeProvider theme={THEMES[theme] || THEMES["dark"]}>
      <Story />
    </ThemeProvider>
  );
};
