import { StyleSheet } from "react-native";

// themes.js
// lightTheme.js
const commonStyles = StyleSheet.create({
  screenContainer: {
    // set full screen height and width
    height: "100%",
    width: "100%",
    flex: 1,
    padding: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const lightTheme = {
  commonStyles,
  // Colors
  primaryColor: "#007AFF",
  secondaryColor: "#5AC8FA",
  backgroundColor: "#F3F3F3",
  // texts
  textColor: "#2C3333",
  secondaryTextColor: "#B9B9B9",
  placeholderTextColor: "#A9A9A9",
  // borders

  borderColor: "#D3D3D3",
  // alerts
  errorColor: "#FF3B30",
  successColor: "#4CD964",
  warningColor: "#FFCC00",
  // others
  white: "#FFFFFF",
  black: "#000000",
  mangoBlack: "#FFFFFF",

  // Button Colors
  buttonPrimary: "#3498db",
  buttonSecondary: "#2ecc71",

  // Modifiers
  primaryColorLight: "#7fb3d5",
  primaryColorDark: "#2674ab",
  secondaryColorLight: "#8eeb8e",
  secondaryColorDark: "#1a991a",
};

export const darkTheme = {
  commonStyles,
  // Colors
  primaryColor: "#0A84FF",
  secondaryColor: "#5AC8FA",
  backgroundColor: "#2C3333",
  textColor: "#FFFFFF",
  secondaryTextColor: "#4F4D4D",

  placeholderTextColor: "#A9A9A9",
  borderColor: "#D3D3D3",
  errorColor: "#FF3B30",
  successColor: "#4CD964",
  warningColor: "#FFCC00",
  white: "#FFFFFF",
  black: "#000000",
  mangoBlack: "#2A2C38",

  // Shadows
  boxShadow: {
    shadowColor: "#FFFFFF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
};
