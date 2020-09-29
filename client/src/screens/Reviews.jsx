import React from "react";

const Reviews = (props) => {
  const reviewsJSX = props.reviews.map((review, index) => (
    <div key={index}>
      <h1>Reviews</h1>
      <h2>Author: {review.author}</h2>
      <h2>Rating: {review.rating}</h2>
      <p>Description: {review.description}</p>
    </div>
  ));

  return <div>{reviewsJSX}</div>;
};

export default Reviews;
