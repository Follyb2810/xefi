import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#FF6F61",
      100: " #00A6A6",
      150: "#06071b",
      200: "  #1A4C8B",
      250: "  #1A4C6B",
      300: " #708090",
      400: " #6C3483",
      500: " #FFD700",
      600: " #00A896",
      700: "#FFFFFF",
      800: "#45B5AA",
      900: "#D3D3D3",
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",
    heading: "Poppins, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "brand.150",
      },
    },
  },
});

export default theme;