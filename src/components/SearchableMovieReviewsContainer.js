import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  state={
    reviews:[],
     searchTerm:''
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    fetch(URL+this.state.searchTerm)
    .then(res=>res.json())
    .then(json=>this.setState({reviews:json.results}),()=>console.log(this.state.reviews))
  }



  handleChange=(e)=>{
    this.setState({searchTerm:e.target.value})
  }
  render(){
    return (
      <div className="searchable-movie-reviews">
        <h1>search</h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          enter name:
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
     <div className="review-list">
        <MovieReviews reviews={this.state.reviews} />
     </div>
      </div>
    )
  }
}
