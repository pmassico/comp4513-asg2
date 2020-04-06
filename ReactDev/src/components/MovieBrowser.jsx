import React from "react";
import MovieList from './MovieList.jsx';
import Filters from './Filters.jsx';
import load from '../photos/ajax-loader.gif';
import './MovieBrowser.css';

//This component is the main browser page housing the filters and movie list
class MovieBrowser extends React.Component {

    //hide the filters component
    hideFilters = () => {
        let content = document.querySelector("#filterContent");
        content.classList.add("is-hidden");
        let upArrow = document.querySelector("#hiddenContentFilter");
        upArrow.classList.remove("is-hidden");
    }

    //show the filters component
    showFilters = () => {
        let content = document.querySelector("#filterContent");
        content.classList.remove("is-hidden");
        let upArrow = document.querySelector("#hiddenContentFilter");
        upArrow.classList.add("is-hidden");
    }

    render() {
        const dataLoaded = this.props.dataLoaded;
        return (
            <div id="browse-container">
                <div id="browse-header">
                    <div className="title is-3" id="browse-title">browse</div>
                    <Filters applyFilters={this.props.applyFilters} resetFilters={this.props.resetFilters} hideFilters={this.hideFilters} showFilters={this.showFilters}/>
                </div>
                <div id="movieList">
                    {dataLoaded ? (
                        <div>
                            <MovieList movies={this.props.movies} showMovieDetails={this.props.showMovieDetails} addToFavs={this.props.addToFavs} sortList={this.props.sortList}/>
                        </div>
                    ) : (
                        <div id="loader">
                            <img alt="content loading" src={load} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default MovieBrowser