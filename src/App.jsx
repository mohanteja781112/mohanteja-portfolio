import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen selection:bg-[#8B5CF6]/30 selection:text-white overflow-x-hidden bg-[#050816]">
      {/* Navbar */}
      <Navbar />

      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
