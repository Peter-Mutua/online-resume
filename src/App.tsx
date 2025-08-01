import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import ProfessionalSummary from './components/ProfessionalSummary';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import PDFDownload from './components/PDFDownload';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import VisitorCounter from './components/VisitorCounter';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <>
      <Helmet>
        <title>Peter Mwendwa Mutua - Solutions Architect & Full Stack Developer</title>
        <meta name="description" content="Experienced Solutions Architect and Full Stack Developer with 7+ years in banking, fintech, and enterprise systems. Expert in React, Node.js, Java, Python, and cloud architecture." />
        <meta name="keywords" content="Solutions Architect, Full Stack Developer, React, Node.js, Java, Python, Banking Systems, Fintech, Cloud Architecture, Nairobi Kenya" />
        <meta name="author" content="Peter Mwendwa Mutua" />
        <meta property="og:title" content="Peter Mwendwa Mutua - Solutions Architect & Full Stack Developer" />
        <meta property="og:description" content="Experienced Solutions Architect and Full Stack Developer with 7+ years in banking, fintech, and enterprise systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://petermutua.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Peter Mwendwa Mutua - Solutions Architect & Full Stack Developer" />
        <meta name="twitter:description" content="Experienced Solutions Architect and Full Stack Developer with 7+ years in banking, fintech, and enterprise systems." />
        <link rel="canonical" href="https://petermutua.dev" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1e40af" />
      </Helmet>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gray-50 relative"
      >
        <BackgroundEffects />
        <Header />
        <ProfessionalSummary />
        <Skills />
        <WorkExperience />
        <Education />
        <Certifications />
        <Projects />
        <Testimonials />
        <PDFDownload />
        <ContactForm />
        <Footer />
        <VisitorCounter />
      </motion.div>
    </>
  );
}

export default App;