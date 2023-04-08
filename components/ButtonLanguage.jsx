import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <text onClick={() => handleLanguageChange("en")}>English</text>
      <text onClick={() => handleLanguageChange("zh")}>中文</text>
    </div>
  );
}

export default LanguageSwitcher;
