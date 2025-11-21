import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import AIAudit from './components/AIAudit';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-teal-500/30 selection:text-teal-200">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
        <AIAudit />
      </main>
      <Footer />
    </div>
  );
};

export default App;