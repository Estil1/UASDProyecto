import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer'; // Agrega esta línea

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <Hero />
      <div className="flex-grow"></div> {/* Este div ocupará el espacio restante */}
      <Footer />
    </div>
  );
}


export default App;
