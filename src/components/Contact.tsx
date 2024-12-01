import { motion } from "framer-motion";
import { useContext, useRef } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Contact = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      heading: "Contact Me",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      buttonText: "Send Message",
      successMessage: "Message sent successfully!",
      errorMessage: "Error sending message.",
    },
    de: {
      heading: "Kontaktieren Sie mich",
      emailPlaceholder: "Ihre E-Mail",
      messagePlaceholder: "Ihre Nachricht",
      buttonText: "Nachricht senden",
      successMessage: "Nachricht erfolgreich gesendet!",
      errorMessage: "Fehler beim Senden der Nachricht.",
    },
  };

  const {
    heading,
    emailPlaceholder,
    messagePlaceholder,
    buttonText,
    successMessage,
    errorMessage,
  } = content[language];

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);

    try {
      const response = await fetch("https://formspree.io/f/mkgnvaja", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      alert(successMessage);
      formRef.current.reset();
    } catch (error) {
      console.error("Error:", error);
      alert(errorMessage);
    }
  };

  return (
    <div className="contact-container">
      <section id="contact" className="pt-28 pb-44 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100"
          >
            {heading}
          </motion.h2>
          <motion.form
            ref={formRef}
            onSubmit={onSubmit}
            className="max-w-xl mx-auto space-y-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <input
              type="email"
              name="email"
              placeholder={emailPlaceholder}
              required
              className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-md focus:ring-2 focus:ring-accent-color dark:bg-gray-700 dark:text-gray-200"
            />
            <textarea
              name="message"
              rows={4}
              placeholder={messagePlaceholder}
              required
              className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-md focus:ring-2 focus:ring-accent-color dark:bg-gray-700 dark:text-gray-200"
            />
            <motion.button
              type="submit"
              className="px-6 py-3 bg-accent-color text-white bg-blue-700 rounded-lg shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105 dark:bg-blue-700 dark:hover:bg-blue-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {buttonText}
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Contact;