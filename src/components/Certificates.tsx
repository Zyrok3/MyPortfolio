import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { motion } from "framer-motion";

const Certificates = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      heading: "Certificates & Achievements",
    },
    de: {
      heading: "Zertifikate & Erfolge",
    },
  };

  const { heading } = content[language];

  const certificates = [
    {
      title: language === "en" ? "AWS Certified Developer" : "AWS Zertifizierter Entwickler",
      date: "2023",
      thumbnail: "/images/tempimage-600x400.svg",
    },
    {
      title:
        language === "en"
          ? "React Professional Certification"
          : "React Professionelle Zertifizierung",
      date: "2022",
      thumbnail: "/images/tempimage-600x400.svg",
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg shadow-lg hover:shadow-xl dark:bg-gray-800 dark:text-gray-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={cert.thumbnail}
                alt={cert.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-500">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;