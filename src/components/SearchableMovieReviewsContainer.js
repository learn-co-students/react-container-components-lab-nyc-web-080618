import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'deace16c1ed340b981e2b344e492c712';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

  constructor(){
    super()
    this.state = {
      reviews:[],
      searchTerm:''
    }
  }

   handleSubmit = event => {
    event.preventDefault()
    fetch(URL+this.state.searchTerm)
      .then(r=>r.json())
      .then(data=>this.setState({reviews: data.results}))
  }

   handleChange = event => {
    this.setState({searchTerm: event.target.value})
  }
   render(){
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.searchTerm} onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
