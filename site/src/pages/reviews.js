import React from 'react';
import './styles.css';

function Reviews() {
  return (
    <div className="reviews">
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
            <li><a href="/landscaping">Landscaping</a></li>
            <li className="highlight-nav"><a href="/reviews">Review Board</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div id="reviews-container">
          <div id="reviews">
          </div>
          <div id="review-creator">
            <div id="request-block">
              <h3>Write a Review!</h3>
              <div className="inputs">
                <h4>Title:</h4>
                <input type="text" />
              </div>
              <div className="inputs">
                <h4>Review Code:</h4>
                <input type="text" />
              </div>
              <div className="inputs">
                <h4>Description:</h4>
                <textarea rows="6" cols="30"></textarea>
              </div>
              <div className="inputs">
                <h4>Picture:</h4>
                <button>Choose File</button>
              </div>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Reviews;
