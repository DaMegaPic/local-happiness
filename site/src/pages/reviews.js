import React, { use, useState } from 'react';
import './styles.css';
import ReviewsList from '../components/reviews-list';


function Reviews() {
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [rating, setRating] = useState('');
  const [reviewer, setReviewer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, code, description, image, rating, reviewer});
  }

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
                <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="inputs">
                <h4>Review Code:</h4>
                <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                />
              </div>
              <div className="inputs">
                <h4>Rating:</h4>
                <select value={rating} onChange={(e) => setRating(e.target.value)}>
                  <option value="">Select Rating</option>
                  <option value="1">★☆☆☆☆</option>
                  <option value="2">★★☆☆☆</option>
                  <option value="3">★★★☆☆</option>
                  <option value="4">★★★★☆</option>
                  <option value="5">★★★★★</option>
                </select>
              </div>

              <div className="inputs">
                <h4>Your Name:</h4>
                <input
                  type="text"
                  value={reviewer}
                  onChange={(e) => setReviewer(e.target.value)}
                />
              </div>
              <div className="inputs">
                <h4>Description:</h4>
                <textarea
                rows="6"
                cols="30"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="inputs">
                <h4>Picture:</h4>
                <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <button onclick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Reviews;
