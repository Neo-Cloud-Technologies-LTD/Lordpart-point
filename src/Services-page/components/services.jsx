import React from 'react';
import Hero from '../../Services-page/components/hero';
import Core from '../../Services-page/components/core';

import ConsultingCard from './ConsultingCard';
import SustainabilityCard from './SustainabilityCard';
import ProcessSection from './ProcessSection';
import CTASection from './CTASection';
import Footer from './Footer';

function Services() {
  return (
    <div className="w-full min-h-screen bg-[#0A0D14]">
     
      <Hero /> 
    
    <Core/>
    <ConsultingCard/>
    <SustainabilityCard/>
    <ProcessSection/>
    <CTASection/>
    <Footer/>
    </div>

  

  );
}




export default Services; 


