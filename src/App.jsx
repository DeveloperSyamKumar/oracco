import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-marine-deep text-white font-sans selection:bg-marine-aqua selection:text-marine-deep">
      {/* Global Fixed Background Container Ship Image */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&q=80&w=2070"
          alt="Container Ship Marine Vessel"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-marine-deep/75" />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;



