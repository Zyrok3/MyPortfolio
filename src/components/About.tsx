import { useContext } from "react";
import Image from "next/legacy/image";
import { LanguageContext } from "../context/LanguageContext";
import { saveAs } from "file-saver";

const AboutSection = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      heading: "About Me",
      description:
        "I am a passionate IT student and developer with a strong enthusiasm for technology, problem-solving, and innovation. My interests lie in exploring diverse areas of IT, from programming and system optimization to emerging technologies. I strive to enhance my skills and contribute to impactful projects that drive progress and creativity.",
    },
    de: {
      heading: "Über Mich",
      description:
        "Ich bin IT-Student und Entwickler mit Leidenschaft für Technologie, Problemlösung und Innovation. Mein Ziel ist es, meine Fähigkeiten stetig zu erweitern und an kreativen Projekten mitzuarbeiten.",
    },
  };

  const { heading, description } = content[language];

  const downloadCV = () => {
    saveAs("/path/to/your/cv.pdf", "CV_Felix_Reder.pdf");
  };

  return (
    <section id="about" className="relative py-40">
      <div className="container mx-auto flex flex-col md:flex-row items-center pl-40">
        <div className="flex-1 flex items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 text-gray-800 dark:text-gray-100">
              {heading}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-10 text-xl max-w-3xl">
              {description}
            </p>
            <button
              onClick={downloadCV}
              className="px-6 py-3 bg-blue-600 opacity-80 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Download CV
            </button>
          </div>
          <div className="relative w-72 h-72 ml-8 md:ml-20">
            <Image
              src="/images/felix_reder.jpg"
              alt="Felix Reder"
              layout="fill"
              objectFit="cover"
              objectPosition="center 30%"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;