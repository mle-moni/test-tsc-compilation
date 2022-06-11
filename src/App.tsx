import { useTranslation } from "react-i18next";

export const App = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("login:login-0")}</h1>
    </div>
  );
};
