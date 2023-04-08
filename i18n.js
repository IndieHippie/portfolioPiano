import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./public/locales/en/common.json";
import zhTranslations from "./public/locales/zh/common.json";

const resources = {
  en: {
    translation: enTranslations,
  },
  zh: {
    translation: zhTranslations,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
