import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import './App.css';

const App = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleIsNav = () => {
      setIsNavExpanded(!isNavExpanded);
      document.body.classList.toggle('fixed-pos');
  }

  return (
    <div className='App'>
      <Navbar 
        toggleIsNav={toggleIsNav}
        isNavExpanded={isNavExpanded}
      />
      <Gallery />
      <About />
    </div>
  );
}

export default App;
