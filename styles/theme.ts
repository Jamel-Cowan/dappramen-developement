import { extendTheme } from "@chakra-ui/react";

export const myNewTheme = extendTheme({
 
  colors: {
    primary: "#CB3928",
    secondary: {black: "#000000", white: "#FFFFFF"},
    highlight: {},
    warning: {},
    danger: {},


    brand: {
        black: "#000000",
        white: "#FFFFFF",
        red: {
            "500": "#D53F8C",
            },
        },
    gray: {
      "50": "#F5F8FA",
      "100": "#DADADA",
      "200": "#999999",
      "500": "#47585B",
    },
  },
  styles: {
    global: {
      body: {
        bg: "brand.black",
        color: "brand.white",
      },
    },
  },
});