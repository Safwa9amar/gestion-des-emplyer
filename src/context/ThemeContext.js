// ThemeContext.js
import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { lightTheme, darkTheme } from "../utils/theme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useLocalStorage("isDarkMode", false);

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  const theme = {
    isDarkMode,
    theme: isDarkMode ? darkTheme : lightTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
