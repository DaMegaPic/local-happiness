import React from 'react';
import '../pages/styles.css';

const ReviewsList = () => {
  const sampleReviews = [
    {
      title: "Review Title",
      rating: 3,
      image: "https://placehold.co/200x100",
      content: "This is where the customer would talk more about how they felt about the work done and include a date posted and name at the end",
      date: "2/9/2025",
      reviewer: "Colson Carey",
    },
    {
      title: "Review Title",
      rating: 5,
      image: "https://placehold.co/200x100",
      content: "This is where the customer would talk more about how they felt about the work done and include a date posted and name at the end",
      date: "2/9/2025",
      reviewer: "Colson Carey",
    },
  ];

  return (
    <div id="reviews">
      {sampleReviews.map((review, index) => (
        <div key={index} className="review">
          <div className="review-header">
            <h3>{review.title}</h3>
            <span>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
          </div>
          <img src={review.image} alt="Review Visual" />
          <p>{review.content}</p>
          <div className="review-details">
            <span>{review.date}</span>
            <span>- {review.reviewer}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewsList;
