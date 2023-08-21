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
  const themeLocal = window.localStorage.getItem("theme") as "dark" | "light";
  const [isDarkTheme, setIsDarkTheme] = useState(themeLocal || "darkg");
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => {
      if (prevTheme === "dark") {
        return "light";
      }
      return "dark";
    });
  };
  const theme: ThemeType = isDarkTheme === "dark" ? darkTheme : lightTheme;

  window.localStorage.setItem("theme", isDarkTheme);
  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default StyledThemeProvider;
