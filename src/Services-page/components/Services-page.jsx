
// src/App.jsx
import React from 'react';
import Hero from './components/hero';
import Core from './core';
import ConsultingCard from './ConsultingCard';
import SustainabilityCard from './SustainabilityCard';
import ProcessSection from './ProcessSection';
import CTASection from './CTASection';
import Footer from './Footer';
function App() {
  return (
    <main className="w-full min-h-screen bg-[#0A0D14]">
     
      <Hero /> 
    
    <core/>
    <ConsultingCard/>
    <SustainabilityCard/>
    <ProcessSection/>
    <CTASection/>
    <Footer/>
    



    </main>

  

  );
}

export default App;