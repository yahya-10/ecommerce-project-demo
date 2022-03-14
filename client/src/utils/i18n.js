import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "../locales/en.json";
import translationES from "../locales/es.json";
import translationFR from "../locales/fr.json";

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
  fr: {
    translation: translationFR,
  },
};

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: ["en", "es", "fr"],
    supportedLngs: ["en", "es", "fr"],
    debug: false,
    resources,
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },

    react: {
      useSuspense: false,
    },
  });

export default i18next;
