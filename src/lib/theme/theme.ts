import {createTheme} from "@mui/material/styles";

import "@fontsource/homenaje";
import "@fontsource/roboto-flex";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#865C97",
    },
    secondary: {
      // main: "#f7e1af",
      main: "#f7d588",
      // main: "#ffe19e",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          height: "40px",
          width: "95px",
          borderRadius: "40px",
        },
      },
    },
  },
  typography: {
    fontFamily: "Roboto,Arial,sans-serif",
    h1: {
      fontFamily: "Homeja,sans-serif",
      fontWeight: "700",
      fontSize: "80px",
      lineHeight: "96px",
      color: "#252525",
    },
    body1: {
      fontFamily: "Roboto Flex",
      fontWeight: "500",
      size: "17px",
      color: "#7a7a7a",
    },
  },
});
