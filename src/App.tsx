import { AllKeysUnion } from "./locales/AllKeysUnion";
import { useTranslationWrapper } from "./locales/i18nWrapper";

export const App = () => {
  const { t } = useTranslationWrapper();

  const keys: AllKeysUnion[] = [
    "anotherTest:anotherTest-100",
    "hehe:hehe-30",
    "login:login-103",
    "common:common-126",
  ];

  return (
    <div>
      <h1>{t("login:login-0")}</h1>

      {keys.map((key) => (
        <p key={key}>{t(key)}</p>
      ))}
    </div>
  );
};
