import React from "react";
import StarRating from 'star-rating-react';
import styled from "styled-components";

const Review = styled.div`
display: flex;
flex-direction: column;
font-size: 20px;
justify-content: flex-start;
align-items: left;
`



const Reviews = (props) => {
  const reviewsJSX = props.reviews.map((review, index) => (
    <Review key={index}>
      <h3>Customer reviews:</h3>
      <StarRating size={review.rating} value={review.rating}  />
      <h4>{review.author} {review.location}</h4>
      <h3>Rating: {review.rating}</h3>
      <p>Description: {review.description}</p>
    </Review>
  ));

  return <div>{reviewsJSX}</div>;
};

export default Reviews;
