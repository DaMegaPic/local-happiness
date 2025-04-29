import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/about';
import Kitchens from './pages/kitchens';
import Bathrooms from './pages/bathrooms';
import Landscaping from './pages/landscaping';
import ReviewBoard from './pages/reviews';
import './App.css';
import Header from './components/header';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/kitchens" element={<Kitchens />} />
            <Route path="/bathrooms" element={<Bathrooms />} />
            <Route path="/landscaping" element={<Landscaping />} />
            <Route path="/reviews" element={<ReviewBoard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  const baseUrl = process.env.PUBLIC_URL; // Get base URL for GitHub Pages :)

  return (
    <div id="wrapper">
      <div id="flex-nodes">
        <div className="node">
          <img src={`${baseUrl}/images/naturaldeckshot.jpg`} alt="A natural scene with a deck we built" />
          <h2>A new deck</h2>
        </div>
        <div className="node">
          <img src={`${baseUrl}/images/secondangledeck.jpg`} alt="Deck second angle" />
          <h2>Privacy wall on deck</h2>
        </div>
        <div className="node">
          <img src={`${baseUrl}/images/bathroom++.jpg`} alt="New Bathroom" />
          <h2>A new bathroom</h2>
        </div>
        <div className="node">
          <img src={`${baseUrl}/images/niceshed.JPEG`} alt="New Shed" />
          <h2>A new farm shed</h2>
        </div>
        <div className="node">
          <img src={`${baseUrl}/images/sculpture.jpg`} alt="Sculpture" />
          <h2>New aluminum base</h2>
        </div>
      </div>
      <img src={`${baseUrl}/images/newbuild.jpg`} alt="New Build" />
    </div>
  );
}

export default App;
