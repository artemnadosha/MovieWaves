"use client";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { darkTheme, lightTheme, ThemeType } from "@/UI-kit";
import { ThemeProvider } from "styled-components";
interface ThemeContextType {
  toggleTheme: () => void;
  isDarkTheme: "dark" | "light";
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => useContext<ThemeContextType | null>(ThemeContext);

const StyledThemeProvider = ({ children }: PropsWithChildren) => {
  const [isDarkTheme, setIsDarkTheme] = useState<"dark" | "light">("dark");
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => {
      if (prevTheme === "dark") {
        return "light";
      }
      return "dark";
    });
  };
  const theme: ThemeType = isDarkTheme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default StyledThemeProvider;
