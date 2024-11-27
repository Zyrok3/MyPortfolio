import HeroSection from "../components/HeroSection";
import AboutSection from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import SocialLinks from "../components/SocialLinks";
import Footer from "../components/Footer";
import Header from "../components/Header";
export default function Home() {
  return (
    <>
      <title>Felix Reder | Portfolio</title>

      <Header />
      <HeroSection />
      <AboutSection />
      <Projects />
      <Contact />
      <SocialLinks />
      <Footer />
    </>
  );
}