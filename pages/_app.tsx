import { ThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./../theme";

import "../styles/globals.scss";
import "macro-css";
import "normalize.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
