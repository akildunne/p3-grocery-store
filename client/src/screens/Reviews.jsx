import React from "react";
import StarRating from 'star-rating-react';
import styled from "styled-components";

const ReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 50px;
`

const Reviews = (props) => {
  const reviewsJSX = props.reviews.map((review, index) => (
    <ReviewCard key={index}>
      <p>{review.rating} {review.title}</p>
      <StarRating size={review.rating} value={review.rating}  />
      <p>{review.author}, {review.location}</p>      
      <p>{review.description}</p>
    </ReviewCard>
  ));

  return <ReviewCard>{reviewsJSX}</ReviewCard>;

};

export default Reviews;
