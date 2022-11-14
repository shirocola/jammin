import React from 'react';

import './SearchResults.css';

import TrackList from '../Tracklist/Tracklist';

class SearchResults extends React.Component {
    render() {
        console.log(this.props)
        console.log(this.props.searchResults)
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                 <TrackList tracks={this.props.searchResults} 
                    onAdd={this.props.onAdd}
                    isRemoval={false}/>
            </div>
        )
    }
}

export default SearchResults;