import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';

// import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />Home
          <Route path="/about" element={<About />} />About
          <Route path="/contact" element={<Contact />} />Contact
          <Route path="/skills" element={<Skills />} />Skills
          <Route path="/projects" element={<Projects />} />Projects
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
