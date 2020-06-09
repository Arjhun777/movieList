import React, { Component } from 'react';

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableToRender: [
                { columnName: 'Name', columnKey: 'movieName' },
                { columnName: 'Ratings', columnKey: 'ratings' },
                { columnName: 'Duration', columnKey: 'duration' }
            ],
            searchInput: '',
            searchResult: []
        }
    }

    handleSearchChange = (event) => {
        let { searchInput } = this.state;
        searchInput = event.target.value;
        this.searchMovie(searchInput);
        this.setState({ searchInput }); 
    }

    searchMovie = (searchInput) => {
        const { movieDetails } = this.props;
        let searchResultDate = [];
        if (searchInput.length > 2) {
            searchResultDate = movieDetails.filter(data => {
                if (data.movieName.includes(searchInput)) return true;
            })
        }
        this.setState({ searchResult: searchResultDate });
    }

    render() {
        const { handleSearchChange } = this;
        const { tableToRender, searchResult } = this.state;
        const { movieDetails } = this.props;
        return (
            <div>
                <div className="form-input-wrapper">
                    <label>Search</label>
                    <input type="text" id="search-input" onChange={handleSearchChange} />
                </div>
                {
                    movieDetails && movieDetails.length
                    ?
                    <table id="directory-table" className="table-wrapper">
                    <thead>
                        {tableToRender.map(tableData => (
                            <th>{tableData.columnKey}</th>
                        ))}
                    </thead>
                    <tbody>
                        {searchResult && searchResult.length ? 
                            searchResult.map(searchDetail => (
                                <tr>
                                    {tableToRender.map(tableData => (
                                        <td>{searchDetail[tableData.columnKey]}</td>
                                    ))}
                                </tr>
                            ))
                        :
                            movieDetails.map(movieDetail => (
                                <tr>
                                {tableToRender.map(tableData => (
                                        <td>{movieDetail[tableData.columnKey]}</td>
                                ))}
                                    </tr>
                        ))}
                    </tbody>
                </table>
                :
                <div id="no-result">No Result Found</div>
                }
            </div>
        )
    }
}

export default MovieList;