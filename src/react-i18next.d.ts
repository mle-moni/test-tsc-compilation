import anotherTestEn from "./locales/en/anotherTest.json";
import commonEn from "./locales/en/common.json";
import heheEn from "./locales/en/hehe.json";
import loginEn from "./locales/en/login.json";
import menuEn from "./locales/en/menu.json";
import mobileEn from "./locales/en/mobile.json";
import sampleEn from "./locales/en/sample.json";
import userErrorsEn from "./locales/en/userErrors.json";

type ValueOf<T> = T[keyof T];

declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: {
      menu: typeof menuEn;
      common: typeof commonEn;
      login: typeof loginEn;
      sample: typeof sampleEn;
      mobile: typeof mobileEn;
      userErrors: typeof userErrorsEn;
      hehe: typeof heheEn;
      anotherTest: typeof anotherTestEn;
    };
  }

  type RessourceKey = keyof CustomTypeOptions["resources"];

  type AllI18nKeys = ValueOf<{
    [K in RessourceKey]: `${K}:${keyof CustomTypeOptions["resources"][K]}`;
  }>;
}
