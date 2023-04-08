import { appWithTranslation } from "next-i18next";
import Navbar from "../components/Navbar";
import i18n from "../i18n";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    
      <>
      <Navbar />
        <Component {...pageProps} />
      </>

  );
}

export default appWithTranslation(MyApp);
