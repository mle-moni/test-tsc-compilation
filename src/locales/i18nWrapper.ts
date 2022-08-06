import { i18n as I18nInterface, TOptions } from "i18next";
import { useTranslation as useTranslationOriginal } from "react-i18next";
import { AllKeysUnion } from "./AllKeysUnion";

export type TFunctionWrapper = (
  key: AllKeysUnion,
  options?: TOptions
) => string;

export type UseTranslationResponse = {
  t: TFunctionWrapper;
  i18n: I18nInterface;
  ready: boolean;
};

export function useTranslationWrapper(): UseTranslationResponse {
  const { t, i18n, ready } = useTranslationOriginal();

  const myT = (key: AllKeysUnion, options?: TOptions) => t(key, options);

  return { t: myT, i18n, ready };
}
