import { createTheme } from "@material-ui/core/styles";

const mainBlack = "#212121";
const mainWhite = "#fafafa";
const blue = "#757ce8";
// Create a theme instance.
const theme = createTheme({
  palette: {
    common: {
      black: mainBlack,
      white: mainWhite,
      blue: blue,
    },
    primary: {
      main: mainBlack,
    },
    secondary: {
      main: mainWhite,
    },
    info: {
      main: blue,
    },
  },
  typography: {
    h1: {
      fontSize: "2.25rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "32px",
      fontWeight: 700,
      fontFamily: 'Playfair Display',
      textAlign: 'center',
      lineHeight: '43px',
      margin: '0px',
      fontStyle: 'italic'
    },
    a: {
      color: mainBlack,
    },
    body1: {
      fontFamily: 'Poppins'
    }
  },
});

export default theme;
