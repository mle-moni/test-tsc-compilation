import { i18n as I18nInterface } from "i18next";
import { useTranslation as useTranslationOriginal } from "react-i18next";
import { AllKeysUnion } from "./AllKeysUnion";

export type TFunctionWrapper = (key: AllKeysUnion, options?: unknown) => string;

export type UseTranslationResponse = {
  t: TFunctionWrapper;
  i18n: I18nInterface;
  ready: boolean;
};

export function useTranslationWrapper(): UseTranslationResponse {
  const { t, i18n, ready } = useTranslationOriginal();

  // ? giving key as any even if ts could resolve type, to improve perfs
  const myT = (key: AllKeysUnion, options: unknown) =>
    t(key as any, options as any);

  return { t: myT, i18n, ready };
}
