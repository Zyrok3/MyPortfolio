import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div className="flex items-center space-x-4">
      <span
        className={`text-lg font-bold ${
          language === "en" ? "text-blue-500" : "text-gray-500"
        }`}
      >
        EN
      </span>
      <label className="relative inline-block w-10 h-6">
        <input
          type="checkbox"
          checked={language === "de"}
          onChange={toggleLanguage}
          className="sr-only"
        />
        <span className="block w-full h-full bg-gray-400 rounded-full shadow-inner"></span>
        <span
          className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform ${
            language === "de" ? "translate-x-4" : ""
          } transition-transform`}
        ></span>
      </label>
      <span
        className={`text-lg font-bold ${
          language === "de" ? "text-blue-500" : "text-gray-500"
        }`}
      >
        DE
      </span>
    </div>
  );
};

export default LanguageToggle;