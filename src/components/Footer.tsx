import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Footer = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      copyright: "All Rights Reserved.",
    },
    de: {
      copyright: "Alle Rechte vorbehalten.",
    },
  };

  const { copyright } = content[language];

  return (
    <footer className="text-center py-4 dark:bg-gray-1000 header-container w-full bg-white shadow-lg z-50 dark:bg-gray-800">
      <p className="text-gray-500 dark:text-gray-400">
        &copy; 2024 Felix Reder. {copyright}
      </p>
    </footer>
  );
};

export default Footer;