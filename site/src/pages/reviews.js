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

    const handleSubmit = async (e) => {
      e.preventDefault();

      // Reset Messages
      setSuccessMessage('');
      setErrorMessage('');

      // Validation
      if (!title || title.length < 3) {
        setErrorMessage('Title must be at least 3 characters long.');
        return;
      }

      if (!code) {
        setErrorMessage('Code is required.');
        return;
      }

      if (!description || description.length < 10) {
        setErrorMessage('Description must be at least 10 characters long.');
        return;
      }

      if (!rating || isNaN(rating) || rating < 1 || rating > 5) {
        setErrorMessage('Rating must be between 1 and 5.');
        return;
      }

      if (!reviewer) {
        setErrorMessage('Your name is required.');
        return;
      }

      const newReview = {
        title,
        rating,
        code,
        description,
        reviewer,
        image: image ? image.name : "default.jpg" //Placeholder!!!!!!
      };

      try {
        const response = await fetch("https://local-happiness-server.onrender.com/api/reviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newReview)
        });

        if (!response.ok) {
          throw new Error("Failed to submit review");
        }

        const result = await response.json();
        setSuccessMessage("Review added successfully!");

        setTitle('');
        setRating('');
        setCode('');
        setDescription('');
        setReviewer('');
        setImage(null);
      } catch (err) {
        setErrorMessage(err.message || "An error occured while submitting.");
      }
    };

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
                <button onClick={handleSubmit}>Submit</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  export default Reviews;
