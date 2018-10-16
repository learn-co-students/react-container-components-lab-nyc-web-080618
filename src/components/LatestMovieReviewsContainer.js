import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'deace16c1ed340b981e2b344e492c712';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {

  constructor() {
    super();

    this.state = {
      reviews: []
    }
  }

  componentDidMount(){
    fetch(URL)
    .then(r => r.json())
    .then(data => this.setState({
      reviews: data.results
    }))
  }


  render() {
    return (
      <div className="latest-movie-reviews">
        {
          <MovieReviews reviews={this.state.reviews} />
        }
      </div>
    );
  }

}

export default LatestMovieReviewsContainer;
