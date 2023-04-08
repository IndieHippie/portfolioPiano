import { useState } from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = () => {
    const newLanguage = selectedLanguage === "en" ? "zh" : "en";
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div>
      <text onClick={handleLanguageChange}>
        {selectedLanguage === "en" ? "中文" : "English"}
      </text>
    </div>
  );
}

export default LanguageSwitcher;