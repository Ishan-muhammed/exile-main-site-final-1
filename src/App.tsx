
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Services from './components/Services';
import KeyTools from './components/KeyTools';
import ROICalculator from './components/ROICalculator';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Problem />
        <Services />
        <KeyTools />
        <ROICalculator />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
