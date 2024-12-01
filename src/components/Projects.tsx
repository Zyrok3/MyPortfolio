import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { motion } from "framer-motion";

const projects = [
  {
    title: "My Portfolio Website",
    description: "Showcasing personal projects, skills, and achievements",
    link: "https://felixreder.me/",
    image: "/images/MyPortfolioWebsite_Projects.png",
    tags: ["Next.js", "Tailwind CSS"],
  },
];

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

  const { heading } = content[language];

  return (
    <section id="projects" className="py-32 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-28 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-800 dark:text-gray-100">
          {heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-800 dark:text-gray-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-accent-color dark:text-blue-400 mb-2">
                  <a
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
