import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import LanguageToggle from "./Toggles/LanguageToggle";
import ThemeToggle from "./Toggles/ThemeToggle";

const Header = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      name: "{ Felix Reder }",
      navItems: ["About", "Projects", "Contact"],
    },
    de: {
      name: "{ Felix Reder }",
      navItems: ["Über mich", "Projekte", "Kontakt"],
    },
  };

  const { name, navItems } = content[language];

  const navLinks = navItems.map((item) => ({
    name: item,
    href: `#${item.toLowerCase().replace(/[^a-z]/g, "")}`, // Removes invalid characters
  }));

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    event.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-gray-800 shadow-lg z-50 dark:bg-gray-900">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-lg font-bold">
          <a
            href="#"
            onClick={handleLogoClick}
            className="text-white hover:text-blue-400 transition text-2xl"
          >
            {name}
          </a>
        </div>

        {/* Navigation Items */}
        <ul className="flex space-x-6 text-xl">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                onClick={(event) => handleNavLinkClick(event, link.href)}
                className="hover:text-blue-400 text-white dark:hover:text-blue-500"
                aria-label={`Navigate to ${link.name}`}
              >
                {link.name}
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