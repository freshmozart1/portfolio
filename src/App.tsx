import React from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import About from './components/About.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
