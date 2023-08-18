import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "@/UI-kit";

const THEMES = {
  light: lightTheme,
  dark: darkTheme,
};

export const withTheme = (Story, context) => {
  const { theme } = context.globals;

  return (
    <ThemeProvider theme={THEMES[theme] || THEMES["dark"]}>
      <Story />
    </ThemeProvider>
  );
};
