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
    <div id="flex-nodes">
      <div className="node">
        <img src={`${baseUrl}/images/butlerhouse.jpg`} alt="Recent Project" />
        <h2>Our most recent project!</h2>
      </div>
      <div className="node">
        <img src={`${baseUrl}/images/gutted.jpg`} alt="Rebuilding Interior" />
        <h2>We've been fully rebuilding the inside!</h2>
      </div>
      <div className="node">
        <img src={`${baseUrl}/images/door.jpg`} alt="New Doors" />
        <h2>Added some new doors!</h2>
      </div>
      <div className="node">
        <img src={`${baseUrl}/images/noroof.jpg`} alt="Tree Removed from Roof" />
        <h2>We removed a tree from the roof</h2>
      </div>
      <div className="node">
        <img src={`${baseUrl}/images/plywoodroof.jpg`} alt="Roof Rebuild" />
        <h2>Roof Rebuild</h2>
      </div>
      <div className="node">
        <img src={`${baseUrl}/images/tarproof.jpg`} alt="Roof Completion" />
        <h2>It's come a long way!</h2>
      </div>
    </div>
  );
}

export default App;
