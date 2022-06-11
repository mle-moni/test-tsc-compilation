import i18next from "i18next";
import React from "react";
import ReactDOM from "react-dom/client";
import { initReactI18next } from "react-i18next";
import { App } from "./App";
import commonEn from "./locales/en/common.json";
import loginEn from "./locales/en/login.json";
import menuEn from "./locales/en/menu.json";
import mobileEn from "./locales/en/mobile.json";
import sampleEn from "./locales/en/sample.json";
import userErrorsEn from "./locales/en/userErrors.json";
import commonFr from "./locales/fr/common.json";
import loginFr from "./locales/fr/login.json";
import menuFr from "./locales/fr/menu.json";
import mobileFr from "./locales/fr/mobile.json";
import sampleFr from "./locales/fr/sample.json";
import userErrorsFr from "./locales/fr/userErrors.json";

export const resources = {
  fr: {
    menu: menuFr,
    common: commonFr,
    login: loginFr,
    sample: sampleFr,
    mobile: mobileFr,
    userErrors: userErrorsFr,
  },
  en: {
    menu: menuEn,
    common: commonEn,
    login: loginEn,
    sample: sampleEn,
    mobile: mobileEn,
    userErrors: userErrorsEn,
  },
};

i18next.use(initReactI18next).init({
  lng: "fr",
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
  },
  resources,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: {
      menu: typeof menuEn;
      common: typeof commonEn;
      login: typeof loginEn;
      sample: typeof sampleEn;
      mobile: typeof mobileEn;
      userErrors: typeof userErrorsEn;
    };
  }
}
