import React from 'react';
import './App.css'; // Styles globaux
import Header from './components/Header';
import About from './components/About';
import Certificats from './components/Certificats';
import CV from './components/CV';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Certificats />
        <CV />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
