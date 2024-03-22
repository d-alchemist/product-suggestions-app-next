import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: "#4661E6",
    "light-primary": "#F2F4FF",
    "pink-primary": "#AD1FEA",
    "orange-primary": "#F49F85",
    secondary: "#3A4374",
    "light-secondary": "#647196",
    brown: "#373F68",
    blue: "#62BCFA",
    "bg-white": "#fdf7f7"
  },
  borderRadius: {
    10: "10px"
  },
  fonts: {
    heading: `Jost`,
    body: `Jost`,
  },
  fontSize: {
    13: "0.813rem"
  }
});