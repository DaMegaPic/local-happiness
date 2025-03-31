import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div id="flex-header">
          <img id="header-logo" src="/images/logo.jpg" alt="Logo" />
          <h1 id="centered">Local Happiness Construction</h1>
        </div>
        <hr />
        <nav id="main-nav">
          <div id="toggle-nav">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul id="nav-items" className="hide-small">
            <li className="highlight-nav"><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/kitchens">Kitchens</a></li>
            <li><a href="/bathrooms">Bathrooms</a></li>
            <li><a href="/landscaping">Landscaping</a></li>
            <li><a href="/reviews">Review Board</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div id="flex-nodes">
          <div className="node">
            <img src="/images/butlerhouse.jpg" alt="Recent Project" />
            <h2>Our most recent project!</h2>
          </div>
          <div className="node">
            <img src="/images/gutted.jpg" alt="Rebuilding Interior" />
            <h2>We've been fully rebuilding the inside!</h2>
          </div>
          <div className="node">
            <img src="/images/door.jpg" alt="New Doors" />
            <h2>Added some new doors!</h2>
          </div>
        </div>
        <div id="flex-nodes">
          <div className="node">
            <img src="/images/noroof.jpg" alt="Tree Removed from Roof" />
            <h2>We removed a tree from the roof</h2>
          </div>
          <div className="node">
            <img src="/images/plywoodroof.jpg" alt="Roof Rebuild" />
            <h2>Roof Rebuild</h2>
          </div>
          <div className="node">
            <img src="/images/tarproof.jpg" alt="Roof Completion" />
            <h2>It's come a long way!</h2>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
