import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { motion } from "framer-motion";
import axios from "axios";  // Import axios for fetching OG data

const projects = [
  {
    title: "My Portfolio Website",
    description: "Description for project 1",
    link: "https://felixreder.me/",
  },
];

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const [projectImages, setProjectImages] = useState([]);

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

  useEffect(() => {
    const fetchOGImage = async () => {
      const projectData = await Promise.all(
        projects.map(async (project) => {
          try {
            const { data } = await axios.get(`https://opengraph.io/api/1.1/site/${encodeURIComponent(project.link)}?app_id=ac40479e-0dee-486a-971f-e7f76ea73003`);
            console.log('OG Data for', project.link, data);
            return {
              ...project,
              image: data?.ogImage || "/images/default-image.jpg",
            };
          } catch (error) {
            console.error('Error fetching OG data for', project.link, error);
            return {
              ...project,
              image: "/images/default-image.jpg",
            };
          }
        })
      );
      setProjectImages(projectData);
    };    

    fetchOGImage();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-28 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-800 dark:text-gray-100">
          {heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {projectImages.map((project, index) => (
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
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
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
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;