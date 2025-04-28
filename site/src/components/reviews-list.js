function ReviewsList({ reviews, onEdit, onDelete }) {
  if (!Array.isArray(reviews)) {
    return <div>Loading reviews...</div>;
  }

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
            <p>{review.content || review.description}</p>
            <div className="review-details">
              <span>{review.date}</span>
              <span> - {review.reviewer}</span>
            </div>
            <div className="review-actions">
              <button onClick={() => onEdit(review)}>Edit</button>
              <button onClick={() => onDelete(review._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
