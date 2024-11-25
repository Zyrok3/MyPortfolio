import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { motion } from "framer-motion";

const Projects = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      heading: "My Projects",
      viewProject: "View Project",
    },
    de: {
      heading: "Meine Projekte",
      viewProject: "Projekt anzeigen",
    },
  };

  const { heading, viewProject } = content[language];

  const projects = [
    {
      image: "/images/tempimage-600x400.svg",
      title: language === "en" ? "Project 1" : "Projekt 1",
      description: language === "en" ? "Description for project 1" : "Beschreibung für Projekt 1",
      link: "http://example.com/project1",
    },
    {
      image: "/images/tempimage-600x400.svg",
      title: language === "en" ? "Project 2" : "Projekt 2",
      description: language === "en" ? "Description for project 2" : "Beschreibung für Projekt 2",
      link: "http://example.com/project2",
    },
    {
      image: "/images/tempimage-600x400.svg",
      title: language === "en" ? "Project 3" : "Projekt 3",
      description: language === "en" ? "Description for project 3" : "Beschreibung für Projekt 3",
      link: "http://example.com/project3",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-400">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {project.description}
              </p>
              <a
                href={project.link}
                className="mt-4 inline-block text-blue-500 hover:underline dark:text-blue-400"
              >
                {viewProject}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;