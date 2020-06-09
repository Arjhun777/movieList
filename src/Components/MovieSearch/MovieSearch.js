import React, { Component } from 'react';

class MovieSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieDetail: {
                movieName: '',
                ratings: null,
                duration: ''
            }
        }
    }

    handleInputChanges = (event) => {
        let { movieDetail } = this.state;
        const eventName = event.target.name; 
        const eventValue = event.target.value;
        movieDetail[eventName] = eventValue;
        this.setState({ movieDetail });
    }

    handleMovieDetailSubmit = (event) => {
        event.preventDefault();
        const { handleMovieDetailSubmit } = this.props;
        const { movieDetail } = this.state;
        handleMovieDetailSubmit({...movieDetail});
    }

    render() {
        const { handleInputChanges, handleMovieDetailSubmit } = this;
        return (
            <div>
                <form>
                    <div className="form-input-wrapper">
                        <label>Movie Name</label>
                        <input type="text" id="name-input" name="movieName" onChange={handleInputChanges}/>
                    </div>
                    <div className="form-input-wrapper">
                        <label>Ratings</label>
                        <input type="number" step='0.1' id="ratings-input" name="ratings" onChange={handleInputChanges}/>
                    </div>
                    <div className="form-input-wrapper">
                        <label>Duration</label>
                        <input type="text" id="duration-input" name="duration" onChange={handleInputChanges}/>
                    </div>
                    <div className="submit-button">
                        <button onClick={handleMovieDetailSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default MovieSearch;