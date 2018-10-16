// import React from 'react';
//
// const Review=(props)=>{
//   return (
//       <div className="review">
//         {props.display_title}
//         </div>
//   )
// }
// const MovieReviews=(props)=>{
//   return(
//     <div className="review-list">
//
//       {props.reviews.map((review,idx)=><Review key={idx}{...review}/>)}
//
//     </div>
//   )
// }
// export default MovieReviews

import React from 'react';

const Review = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  return (

    <div
      key={headline}
      className="review"
    >
      <header>
        <a
          className="review-link"
          href={link.url}
        >
          {headline}
        </a>
        <br/>
        <span className="author">{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
