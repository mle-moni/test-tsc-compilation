import { AllI18nKeys, useTranslation } from "react-i18next";

export const App = () => {
  const { t } = useTranslation();

  const keys: AllI18nKeys[] = [
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
