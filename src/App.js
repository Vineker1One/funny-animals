import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Logopedam from './components/logopedam/Logopedam';
import Roditelyam from './components/roditelyam/Roditelyam';
import Feedback from './components/feedback/Feedback';
import About from './components/about/About';
import Games from './components/games/Games';

function App() {
  useEffect(() => {
    const header = document.querySelector('.header');
    const contentContainer = document.querySelector('.content-container');
    if (header && contentContainer) {
      const headerHeight = header.offsetHeight;
      contentContainer.style.paddingTop = `${headerHeight}px`;
    }

    const handleResize = () => {
      const headerHeight = header.offsetHeight;
      contentContainer.style.paddingTop = `${headerHeight}px`;
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <Header />
      <main className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logopedam" element={<Logopedam />} />
          <Route path="/roditelyam" element={<Roditelyam />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;