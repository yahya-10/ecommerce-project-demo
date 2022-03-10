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
console.log(resources.es);

i18next
  .use(HttpApi)
  .use(new LanguageDetector(null, { lookupLocalStorage: "lang" }))
  .use(initReactI18next)
  .init({
    debug: false,
    resources,
    detection: {
      order: ["localStorage"],
      // lookupLocalStorage: "lng",
    },

    react: {
      useSuspense: false,
    },
  });

export default i18next;
