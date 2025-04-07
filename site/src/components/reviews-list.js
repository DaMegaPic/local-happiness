import React, { useEffect, useState } from 'react';
import '../pages/styles.css';

function ReviewsList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://local-happiness-server.onrender.com/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Failed to fetch reviews:", err));
  }, []);

  return (
    <div id="reviews-container">
      <div id="reviews">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <div className="review-header">
              <h3>{review.title}</h3>
              <span>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
            </div>
            <img src={review.image} alt="Review Visual" />
            <p>{review.content}</p>
            <div className="review-details">
              <span>{review.date}</span>
              <span> - {review.reviewer}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewsList;
