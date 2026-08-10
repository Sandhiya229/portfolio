import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import WhyWorkWithMe from './components/WhyWorkWithMe/WhyWorkWithMe';
import WorkProcess from './components/WorkProcess/WorkProcess';
import CTA from './components/CTA/CTA';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {


  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <WhyWorkWithMe />
        <WorkProcess />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
