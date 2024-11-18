import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black flex flex-col justify-center items-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-white"
      >
        Hi, I'm Felix Reder
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-xl text-gray-300 mt-4"
      >
        Software Engingeer. A self-taught developer with an interest in Computer Science.
      </motion.p>
      <motion.a
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-400 transition"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default HeroSection;