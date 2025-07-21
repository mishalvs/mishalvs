import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import SkillsSection from './components/SkillsSection';
import Contact from './components/Contact';


const appStyles = {
  backgroundColor: '#04021a',
  minHeight: '100vh',
  paddingTop: '64px',      // offset for fixed navbar
  overflowX: 'hidden',     // prevent horizontal scroll
};

function App() {
  return (
    <div style={appStyles}>
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <Education />
      <Projects />
      <SkillsSection />
      <Contact />
      
    </div>
  );
}

export default App;
