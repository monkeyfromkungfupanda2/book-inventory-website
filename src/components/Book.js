import React, { useState } from "react";

const Book = ({ book, onRatingChange }) => {
  const [rating, setRating] = useState(book.rating || 1);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    onRatingChange(book.isbn, newRating);
  };

  return (
    <div className="book-card">
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">Author: {book.author}</p>
      <img
        className="book-cover"
        src={book.cover ? book.cover.large : ""}
        alt={book.title}
      />
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rating ? "star filled" : "star"}
            onClick={() => handleRatingChange(star)}
          >
            &#9733;
          </span>
        ))}
      </div>
      <button className="delete-book-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Book;
