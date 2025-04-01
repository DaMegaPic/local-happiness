import React from 'react';
import './styles.css';
import ReviewsList from '../components/reviews-list';


function Reviews() {
  return (
    <div className="reviews">
      <main>
        <div id="reviews-container">
          <ReviewsList />
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
