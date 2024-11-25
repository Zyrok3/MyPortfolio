import HeroSection from "../components/HeroSection";
import AboutSection from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import SocialLinks from "../components/SocialLinks";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Timeline from "../components/Timeline";

export default function Home() {
  return (
    <>
      <title>Felix Reder | Portfolio</title>

      <Header />
      
      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <Timeline />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <SocialLinks />
      <Footer />
    </>
  );
}