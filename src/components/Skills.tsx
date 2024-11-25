import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { FaReact, FaNodeJs, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

const Skills = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      heading: "My Skills & Expertise",
    },
    de: {
      heading: "Meine Fähigkeiten & Expertise",
    },
  };

  const { heading } = content[language];

  const skillIcons = [
    { icon: <FaJs />, name: language === "en" ? "JavaScript" : "JavaScript" },
    { icon: <SiTypescript />, name: language === "en" ? "TypeScript" : "TypeScript" },
    { icon: <FaReact />, name: language === "en" ? "React" : "React" },
    { icon: <SiNextdotjs />, name: language === "en" ? "Next.js" : "Next.js" },
    { icon: <FaNodeJs />, name: language === "en" ? "Node.js" : "Node.js" },
    { icon: <FaCss3Alt />, name: language === "en" ? "CSS" : "CSS" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          {heading}
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {skillIcons.map((skill, index) => (
            <div
              key={index}
              className="bg-blue-100 text-blue-500 p-4 rounded-full shadow-md text-xl dark:bg-blue-900"
            >
              <div className="flex flex-col items-center">{skill.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;