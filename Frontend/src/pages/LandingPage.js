import React, { useState } from 'react';
import ContactSection from '../components/contactSection/ContactSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Header from '../components/Header';
import ServicesSection from '../components/services/ServicesSection';
import TeamSection from '../components/team/TeamSection';
import Results from '../components/results/Results';

function LandingPage() {
  const [showResult, setshowResult] = useState(false);
  const [result, setresult] = useState(null);
  function resultHandler(newResult) {
    setresult(newResult);
    setshowResult(true);
  }
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
      {showResult && <Results result={result} />}
      <Footer />
    </>
  );
}

export default LandingPage;
