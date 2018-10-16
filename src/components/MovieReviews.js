// Code MovieReviews Here
import React, { Component } from 'react';

const MovieReviews = ({reviews}) => {
  // console.log(reviews);
  return (
    <div className="review-list">
      {reviews.map((review, index) => {
        return <li key={index}>{review.headline}</li>
      })}
    </div>
  );
}

export default MovieReviews;
