import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Knowledges from './pages/Knowledges';
import Home from './pages/Home';
import PortFolio from './pages/PortFolio';
import Contact from './pages/Contact';
import { useRef } from 'react';


const App = () => {
  let curseurRef = useRef();
  const mousePos = e => {
    curseurRef.current.setAttribute('style', `top:${e.pageY - 20}px; left:${e.pageX - 20}px;`)
  }


  return (
    <div onMouseMove={mousePos} className="App">
      <div ref={curseurRef} className="curseur-perso"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/competences" element={<Knowledges />} />
          <Route path="/portfolio" element={<PortFolio />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;