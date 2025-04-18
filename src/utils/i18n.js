import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./translations.json";

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fi", // Set Finnish as the default language
    fallbackLng: "en", // Fallback to English if a key is missing in Finnish
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;