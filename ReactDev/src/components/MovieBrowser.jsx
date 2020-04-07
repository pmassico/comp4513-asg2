import React from "react";
import MovieList from './MovieList.jsx';
import Filters from './Filters.jsx';
import load from '../photos/ajax-loader.gif';
import './MovieBrowser.css';
import CSSTransition from "react-transition-group/cjs/CSSTransition";

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
                    <CSSTransition
                        in={true}
                        appear={true}
                        timeout={200}
                        classNames="fade"
                    >
                        <div className="title is-3" id="browse-title">browse</div>
                    </CSSTransition>
                    <Filters applyFilters={this.props.applyFilters} resetFilters={this.props.resetFilters} hideFilters={this.hideFilters} showFilters={this.showFilters} sortList={this.props.sortList} clearSort={this.props.clearSort}/>
                </div>
                <div id="movieList">
                    {dataLoaded ? (
                        <div>
                            <MovieList movies={this.props.movies} showMovieDetails={this.props.showMovieDetails} addToFavs={this.props.addToFavs} />
                        </div>
                    ) : (
                        <div className="spin"></div>
                    )}
                </div>
            </div>
        );
    }
}

export default MovieBrowser