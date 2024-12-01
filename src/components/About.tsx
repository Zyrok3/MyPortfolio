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
        "I am an HTL student specializing in Information Technology with a strong interest in AI, neural networks, and network security. I enjoy tackling challenges, solving complex problems on platforms like LeetCode, and participating in hackathons. I strive to enhance my skills and contribute to innovative projects.",
    },
    de: {
      heading: "Über Mich",
      description:
        "Ich bin HTL-Schüler mit Schwerpunkt Informationstechnologie und habe ein starkes Interesse an KI, neuronalen Netzen und Netzwerksicherheit. Ich löse gerne komplexe Probleme, etwa auf Plattformen wie LeetCode, und nehme an Hackathons teil. Mein Ziel ist es, meine Fähigkeiten zu verbessern und zu innovativen Projekten beizutragen.",
    },
  };

  const { heading, description } = content[language] || content.en;

  const downloadCV = () => {
    saveAs("/Felix-Reder_Resume.pdf", "Felix-Reder_Resume.pdf");
  };

  return (
    <section id="about" className="pt-32 pb-36 dark:bg-gray-900 bg-gray-100 pl-44">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="">
            <h2 className="text-6xl font-bold mb-6 text-gray-800 dark:text-gray-100">
              {heading}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-10 text-2xl max-w-4xl">
              {description}
            </p>
            <button
              onClick={downloadCV}
              className="px-6 py-3 bg-accent-color bg-blue-600 text-white rounded-lg dark:bg-blue-700 hover:bg-blue-700 transition duration-300"
            >
              Download CV
            </button>
          </div>
          <div className="relative w-72 h-72 ml-auto mr-auto mt-[-60px]">
            <Image
              src="/images/felix_reder.jpg"
              alt="Felix Reder"
              fill
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;