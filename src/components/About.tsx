import { useContext } from "react";
import Image from "next/image";
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
    <section className="relative">
      <div className="container mx-auto px-4">
        <div className="relative w-full h-[300px] md:h-[400px] mb-8">
          <Image
            src="/images/felix_reder.jpg"
            alt="Felix Reder"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            className="rounded-lg"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-5xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            {heading}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mr-auto mb-10 text-xl">
            {description}
          </p>  
          {/* Uncomment the button below to allow downloading CV */}
          {/* <button
            onClick={downloadCV}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Download CV
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;