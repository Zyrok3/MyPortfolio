import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const AboutSection = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      heading: "About Me",
      description:
        "I am a web developer and IT student with a passion for programming, technology, and building modern, responsive, and accessible websites.",
    },
    de: {
      heading: "Über Mich",
      description:
        "Ich bin ein Webentwickler und IT-Student mit einer Leidenschaft für Programmierung, Technologie und den Aufbau moderner, responsiver und zugänglicher Websites.",
    },
  };

  const { heading, description } = content[language];

  return (
    <section
      id="about"
      className="py-20 bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
    >
      <div className="container mx-auto text-left pl-40">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          {heading}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mr-auto mb-10">
          {description}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
