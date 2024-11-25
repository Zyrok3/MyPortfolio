import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import LanguageToggle from "./Toggles/LanguageToggle";
import ThemeToggle from "./Toggles/ThemeToggle";

const Header = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      name: "Felix Reder",
      navItems: ["About", "Skills", "Projects", "Contact"],
    },
    de: {
      name: "Felix Reder",
      navItems: ["Über mich", "Fähigkeiten", "Projekte", "Kontakt"],
    },
  };

  const { name, navItems } = content[language];

  return (
    <header className="fixed top-0 w-full bg-gray-800 shadow-lg z-50 dark:bg-gray-900">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-lg font-bold">
          <a href="/" className="text-white hover:text-blue-400 transition text-2xl">
            {name}
          </a>
        </div>

        {/* Navigation Items */}
        <ul className="flex space-x-6 text-xl">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="hover:text-blue-400 text-white dark:hover:text-blue-500"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Toggles */}
        <div className="flex items-center space-x-6">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;