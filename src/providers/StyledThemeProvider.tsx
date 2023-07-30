"use client";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { darkTheme, lightTheme, ThemeType } from "@/UI-kit";
import { ThemeProvider } from "styled-components";
interface ThemeContextType {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => useContext<ThemeContextType | null>(ThemeContext);

const StyledThemeProvider = ({ children }: PropsWithChildren) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const theme: ThemeType = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default StyledThemeProvider;
