import anotherTestEn from "./locales/en/anotherTest.json";
import commonEn from "./locales/en/common.json";
import heheEn from "./locales/en/hehe.json";
import loginEn from "./locales/en/login.json";
import menuEn from "./locales/en/menu.json";
import mobileEn from "./locales/en/mobile.json";
import sampleEn from "./locales/en/sample.json";
import userErrorsEn from "./locales/en/userErrors.json";

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

  type I18nResource = keyof CustomTypeOptions["resources"];

  type I18nKey =
    | keyof CustomTypeOptions["resources"]["common"]
    | keyof CustomTypeOptions["resources"]["login"]
    | keyof CustomTypeOptions["resources"]["menu"]
    | keyof CustomTypeOptions["resources"]["sample"]
    | keyof CustomTypeOptions["resources"]["mobile"]
    | keyof CustomTypeOptions["resources"]["userErrors"]
    | keyof CustomTypeOptions["resources"]["hehe"]
    | keyof CustomTypeOptions["resources"]["anotherTest"];

  type AllI18nKey = Exclude<TFuncKey<Namespace<I18nResource>>, I18nKey>;
}
