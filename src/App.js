import React, { Component } from 'react';
import './App.css';
import MovieSearch from './Components/MovieSearch/MovieSearch';
import MovieList from './Components/MovieList/MovieList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        movieDetails: []
    }
  }

  handleMovieDetailsSubmit = (movieDetail) => {
    const { movieDetails } = this.state;
    movieDetails.push(movieDetail);
    this.setState({ movieDetails }, () => {
      this;debugger
    });
  }

  render() {
    const { handleMovieDetailsSubmit } = this;
    const { movieDetails } = this.state;
    return (
      <div className="App">
        <MovieSearch handleMovieDetailSubmit={handleMovieDetailsSubmit}/>
        <MovieList movieDetails={movieDetails}/>
      </div>
    );
  }
}

export default App;
