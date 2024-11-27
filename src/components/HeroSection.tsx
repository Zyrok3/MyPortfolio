import { motion } from "framer-motion";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const HeroSection = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      greeting: "Hey there! I'm,",
      name: "Felix Reder",
      title: "Software Engineer.",
      description: (
        <>
          Constantly focused on learning and expanding my expertise,
          <br />
          crafting ever-improving, high-performing solutions.
        </>
      ),
    },
    de: {
      greeting: "Hey! Ich bin,",
      name: "Felix Reder",
      title: "Software-Ingenieur.",
      description: (
        <>
          Ständig darauf fokussiert, mein Wissen zu erweitern und zu vertiefen,
          <br />
          um immer bessere und leistungsfähigere Lösungen zu entwickeln.
        </>
      ),
    },
  };

  const { greeting, name, title, description } = content[language];

  return (
    <section className="h-screen bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-gray-100 flex flex-col justify-center items-start text-start pl-40">
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-gray-700 dark:text-gray-300 mt-4 text-2xl"
      >
        {greeting}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-9xl font-extrabold text-gray-900 dark:text-gray-100"
      >
        {name}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-2xl text-gray-700 dark:text-gray-300 mt-4 inline"
      >
        <span className="text-blue-500 dark:text-blue-400 text-4xl font-bold mr-2">
          {title}
        </span>
        {description}
      </motion.p>
    </section>
  );
};

export default HeroSection;