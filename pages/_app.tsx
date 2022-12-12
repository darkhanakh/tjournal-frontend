import { ThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./../theme";

import "../styles/globals.css";
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
