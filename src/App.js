import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import './App.css';

const App = () => {


  return (
    <div className='App'>
      <Navbar />
      <Gallery />
      <About />
    </div>
  );
}

export default App;
