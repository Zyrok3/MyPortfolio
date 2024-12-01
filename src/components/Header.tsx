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

  const navLinks = navItems.map((item: string) => {
    const href = item.toLowerCase().replace(/\s+/g, '');
    return {
      name: item,
      href: `#${href === 'übermich' ? 'about' : href === 'projekte' ? 'projects' : href === 'kontakt' ? 'contact' : href}`, // Map German to English
    };
  });

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
    <header className="header-container fixed top-0 w-full bg-white shadow-lg z-50 dark:bg-gray-900">
      <nav className="container ml-auto mr-auto flex justify-between items-center py-4 px-6">
        <div className="text-lg font-bold">
          <a
            href="#"
            onClick={handleLogoClick}
            className="text-gray-900 hover:text-accent-color transition text-2xl dark:text-white"
          >
            {name}
          </a>
        </div>
        <ul className="flex space-x-6 text-xl">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="hover:text-accent-color text-gray-900 dark:text-white dark:hover:text-blue-500"
                aria-label={`Navigate to ${link.name}`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-6">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;