import { appWithTranslation } from "next-i18next";
import Navbar from "../components/Navbar";
import i18n from "../i18n";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    
      <ThemeProvider>
      <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>

  );
}

export default appWithTranslation(MyApp);
