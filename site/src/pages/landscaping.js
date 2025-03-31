import React from 'react';
import './styles.css';

function Landscaping() {
  return (
    <div className="landscaping">
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
            <li><a href="/bathrooms">Bathrooms</a></li>
            <li className="highlight-nav"><a href="/landscaping">Landscaping</a></li>
            <li><a href="/reviews">Review Board</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div id="gallery-wrapper">
          <img id="big-img-1" src="/images/landscaping-big.jpg" alt="Landscaping Before and After" />
          <div id="node-wrapper">
            <h2>Before and After</h2>
            <div id="flex-nodes">
              <div className="node">
                <img src="https://placehold.co/440x220" alt="Example" />
                <h2>This is an Example Header</h2>
              </div>
              <div className="node">
                <img src="https://placehold.co/440x220" alt="Example" />
                <h2>This is an Example Header</h2>
              </div>
            </div>
            <div id="flex-nodes">
              <div className="node">
                <img src="https://placehold.co/440x220" alt="Example" />
                <h2>This is an Example Header</h2>
              </div>
              <div className="node">
                <img src="https://placehold.co/440x220" alt="Example" />
                <h2>This is an Example Header</h2>
              </div>
            </div>
            <div id="flex-nodes">
              <div className="node">
                <img src="https://placehold.co/440x220" alt="Example" />
                <h2>This is an Example Header</h2>
              </div>
              <div className="node">
                <img src="https://placehold.co/440x220" alt="Example" />
                <h2>This is an Example Header</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Landscaping;
