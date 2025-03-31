import React from 'react';
import './styles.css';

function Bathroom() {
  return (
    <div className="bathroom">
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
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/kitchens">Kitchens</a></li>
            <li className="highlight-nav"><a href="/bathrooms">Bathrooms</a></li>
            <li><a href="/landscaping">Landscaping</a></li>
            <li><a href="/reviews">Review Board</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div id="gallery-wrapper">
          <div id="node-wrapper">
            <h2>Before and After</h2>
            {[...Array(3)].map((_, i) => (
              <div key={i} id="flex-nodes">
                <div className="node">
                  <img src="https://placehold.co/440x220" alt="Example" />
                  <h2>This is an Example Header</h2>
                </div>
                <div className="node">
                  <img src="https://placehold.co/440x220" alt="Example" />
                  <h2>This is an Example Header</h2>
                </div>
              </div>
            ))}
          </div>
          <img id="big-img" src="/images/bigbathroom.jpg" alt="Big Bathroom" />
        </div>
      </main>
    </div>
  );
}

export default Bathroom;
