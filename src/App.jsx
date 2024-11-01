import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import Loading from './components/Loading';
import ScrollProgress from './components/ScrollProgress';

// Lazy load components
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

const ThemedApp = () => {
  const { isDark } = useTheme();

  return (
    <div className={`relative min-h-screen ${
      isDark 
        ? 'bg-primary-dark text-white' 
        : 'bg-light-bg text-light-text'
    }`}>
      <div className={`fixed inset-0 main-gradient opacity-50 ${
        isDark ? 'opacity-50' : 'opacity-30'
      }`} />
      
      <Cursor />
      <ScrollProgress />
      <Navbar />
      
      <Suspense fallback={<Loading />}>
        <main className={`relative z-10 ${
          isDark ? 'text-white' : 'text-light-text'
        }`}>
          <section id="hero" className="min-h-screen">
            <Hero />
          </section>
          <section id="about" className={`min-h-screen ${
            isDark 
              ? 'bg-primary-darker' 
              : 'bg-light-secondary'
          }`}>
            <About />
          </section>
          <section id="skills" className="min-h-screen">
            <Skills />
          </section>
          <section id="projects" className={`min-h-screen ${
            isDark 
              ? 'bg-primary-darker' 
              : 'bg-light-secondary'
          }`}>
            <Projects />
          </section>
          <section id="contact" className="min-h-screen">
            <Contact />
          </section>
        </main>
      </Suspense>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

export default App;
