import i18next from "i18next";
import React from "react";
import ReactDOM from "react-dom/client";
import { initReactI18next } from "react-i18next";
import { App } from "./App";
import anotherTestEn from "./locales/en/anotherTest.json";
import commonEn from "./locales/en/common.json";
import heheEn from "./locales/en/hehe.json";
import loginEn from "./locales/en/login.json";
import menuEn from "./locales/en/menu.json";
import mobileEn from "./locales/en/mobile.json";
import sampleEn from "./locales/en/sample.json";
import userErrorsEn from "./locales/en/userErrors.json";
import anotherTestFr from "./locales/fr/anotherTest.json";
import commonFr from "./locales/fr/common.json";
import heheFr from "./locales/fr/hehe.json";
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
    hehe: heheFr,
    anotherTest: anotherTestFr,
  },
  en: {
    menu: menuEn,
    common: commonEn,
    login: loginEn,
    sample: sampleEn,
    mobile: mobileEn,
    userErrors: userErrorsEn,
    hehe: heheEn,
    anotherTest: anotherTestEn,
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
