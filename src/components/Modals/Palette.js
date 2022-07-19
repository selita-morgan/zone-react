import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba(54,93,232)",
      dark: "#2647c5",

    },
    secondary: {
      main: "rgba(105,107,108,0.61)",
    },
    // text: {
    //   primary: "#fff",
    //   secondary: "#fff",
    // },
    },
    shape: {
      borderRadius: 15,
    },

});

export default theme;
