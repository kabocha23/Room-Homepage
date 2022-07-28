import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import './App.css';

const App = () => {

  const [winWidth, setWinWidth] = useState(0)
  const useWindowWidth = (size) => {
    
    useEffect(() => {
      const handleResize = () => {
        setWinWidth(window.innerWidth)
      }
      
      window.addEventListener("resize", handleResize)
      
      handleResize()
      
      return () => { 
        window.removeEventListener("resize", handleResize)
      }
    }, [setWinWidth])
    
    return useWindowWidth > size
  }

  return (
    <div className='App'>
      <Navbar winWidth={winWidth}/>
      <Gallery />
      <About />
    </div>
  );
}

export default App;
