<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> d3ef96aa1d9cec32d73a3edb37135c24a2ba8a02
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import SkillsSection from './components/SkillsSection';
import Contact from './components/Contact';

<<<<<<< HEAD
const appStyles = {
  backgroundColor: '#111', 
  minHeight: '100vh',
  // REMOVE THIS LINE:
  // paddingTop: '64px', 
  overflowX: 'hidden',
};
// ----------------------
=======

const appStyles = {
  backgroundColor: '#04021a',
  minHeight: '100vh',
  paddingTop: '64px',      // offset for fixed navbar
  overflowX: 'hidden',     // prevent horizontal scroll
};
>>>>>>> d3ef96aa1d9cec32d73a3edb37135c24a2ba8a02

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
<<<<<<< HEAD
=======
      
>>>>>>> d3ef96aa1d9cec32d73a3edb37135c24a2ba8a02
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> d3ef96aa1d9cec32d73a3edb37135c24a2ba8a02
