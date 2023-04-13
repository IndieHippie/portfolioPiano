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
      <span
        onClick={handleLanguageChange}
        className={`font-serif ${
          selectedLanguage === "en" ? "text-active font-bold" : "text-gray-500"
        }`}
      >
        Eng
      </span>{" "}
      |{" "}
      <span
        onClick={handleLanguageChange}
        className={`font-serif ${
          selectedLanguage === "zh" ? "text-active font-bold" : "text-gray-500"
        }`}
      >
        中文
      </span>
    </div>
  );
}

export default LanguageSwitcher;
