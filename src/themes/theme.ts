export const theme = {
  colors: {
    primary: "#FAFAFA",
    secondary: "#FFC80A",
    tertiary: "#303030",
    background: "#ffffff",
    text: "#000000",
    title: "#2220ff",
    primaryTextColor: "#594F43",
    secondaryTextColor: "#777777",
    inputPlaceholder: "#C7C7C7",
    darkGrayText: "#303030",
    darkText: "#1A1A1A",
    black: "#000000",
    white: "#ffffff",
    dark: "",
    medium: "",
    light: "",
    danger: "",
    success: "#66A15A",
  },
  fonts: {
    logo: "CWDangamAsac",

    title: "CWDangamAsac",
    notosans: "Noto Sans KR",
    text: "Noto Sans KR",

    roboto: "Roboto",
    subtext: "Roboto",
  },
};

export type ThemeType = keyof typeof theme;
export type ColorType = keyof typeof theme.colors;
export type FontType = keyof typeof theme.fonts;
