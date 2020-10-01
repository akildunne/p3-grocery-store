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
      <p> {review.title} <StarRating size={review.rating} value={review.rating} starRatedColor='black'  /></p>
      <p>{review.author}   {review.location}</p>      
      <p>{review.description}</p>
    </ReviewCard>
  ));

  return <ReviewCard>{reviewsJSX}</ReviewCard>;

};

export default Reviews;
