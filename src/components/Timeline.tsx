import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Timeline: React.FC = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      heading: "My Journey",
    },
    de: {
      heading: "Mein Werdegang",
    },
  };

  const { heading } = content[language];

  const timelineData = [
    {
      title: language === "en" ? "Software Engineer" : "Software-Ingenieur",
      subtitle: language === "en" ? "Tech Company" : "Technologieunternehmen",
      description:
        language === "en"
          ? "Developed web applications and enhanced performance."
          : "Entwickelte Webanwendungen und verbesserte die Leistung.",
      date: language === "en" ? "Jan 2020 - Present" : "Jan 2020 - Heute",
    },
    {
      title:
        language === "en"
          ? "Bachelor of Science in Computer Science"
          : "Bachelor of Science in Informatik",
      subtitle: language === "en" ? "University Name" : "Universität",
      description:
        language === "en"
          ? "Studied computer science topics and specialized in AI."
          : "Studierte Informatik und spezialisierte sich auf KI.",
      date: language === "en" ? "Sep 2016 - Jun 2020" : "Sep 2016 - Jun 2020",
    },
  ];

  return (
    <section id="timeline" className="py-16 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 sm:px-0 lg:px-10 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
          {heading}
        </h2>
        <div className="relative border-l-4 border-blue-500 dark:border-blue-400 pl-6">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <div className="flex items-start space-x-4">
                {/* Timeline Marker */}
                <div className="flex-shrink-0">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold shadow-lg">
                    {index + 1}
                  </span>
                </div>
                {/* Timeline Content */}
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 w-full">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                    {item.title}
                  </h3>
                  <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300">
                    {item.subtitle}
                  </h4>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                  <span className="block mt-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                    {item.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;