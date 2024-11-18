import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';

const Home = () => (
    <>
        <SocialLinks />
        <Header />
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </>
);

export default Home;