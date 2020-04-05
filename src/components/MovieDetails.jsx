import React from "react";
import { Link } from 'react-router-dom';
import load from '../photos/ajax-loader.gif';
import './MovieDetails.css';
import CastCrewTabs from './CastCrewTabs.jsx';
import SingleMovieImage from './SingleMovieImage.jsx';
import AverageRating from './AverageRating.jsx';

//This component is the movie details plus the cast and crew component
class MovieDetails extends React.Component {
    //This function is from: https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
    formatMoney = (amount, decimalCount = 2, decimal = ".", thousands = ",") => {
        try {
            decimalCount = Math.abs(decimalCount);
            decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

            const negativeSign = amount < 0 ? "-" : "";

            let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
            let j = (i.length > 3) ? i.length % 3 : 0;

            return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
        } catch (e) {
            console.log(e)
        }
    };

    render() {
        console.log("movie: " + this.props.movie);
        const imdb = `https://www.imdb.com/title/${this.props.movie.imdb_id}`;
        const moviedb = `https://www.themoviedb.org/movie/${this.props.movie.tmdb_id}`;
        return (
            <div className="is-ancestor columns" id="details-container">
                <div className="tile is-parent">
                    {this.props.dataDetailsLoaded ? (
                        <div className="tile is-child">
                            <div className="tile columns">
                                <div className="tile is-8 is-parent">
                                    <div id="poster-div" className="tile is-child box">
                                        <SingleMovieImage movie={this.props.movie}/>
                                    </div>
                                    <div id="details-div" className="tile is-child box">
                                        <div id="addToFavs">
                                            <Link to='/browse'>
                                                <button className="button">
                                                    <span className="icon is-small">
                                                        <i className="fas fa-angle-left"/>
                                                    </span>
                                                    <span>Back</span>
                                                </button>
                                            </Link>
                                            <button className="button" onClick={()=> this.props.addToFavs(this.props.selectedMovie) }>❤</button>
                                        </div>
                                        <div className="title is-2" id="details-title">
                                            {this.props.movie.title}
                                        </div>
                                        <div id="meta">
                                            <AverageRating rating={this.props.movie.ratings.average} />
                                            <p id="count">({this.props.movie.ratings.count})</p>
                                            <p id="details-release-date">{this.props.movie.release_date} / {this.props.movie.runtime} min.</p>
                                            <p>{this.props.movie.tagline}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tile is-parent">
                                    <div className="tile is-child box">
                                        <CastCrewTabs movie={this.props.movie} dataDetailsLoaded={this.props.dataDetailsLoaded} showCastDetails={this.props.showCastDetails}/>
                                    </div>
                                </div>
                            </div>
                            <div className="tile columns">
                                <div className="tile is-parent is-vertical">
                                    <div className="tile is-child box">
                                        <div className="title is-5">Overview</div>
                                        <ul className="list">
                                            <li className="list-item">{this.props.movie.details.overview}</li>
                                        </ul>
                                    </div>
                                    <div className="tile is-child box">
                                        <div className="title is-5">Info</div>
                                        <ul className="list">
                                            <li className="list-item">Revenue: ${this.formatMoney(this.props.movie.revenue)}</li>
                                        </ul>
                                    </div>
                                    <div className="tile is-child box">
                                        <h1 className="title is-5">Links</h1>
                                        <ul className="list">
                                            <li className="list-item"><a href={imdb} target="_blank" rel="noopener noreferrer">IMBD Page</a></li>
                                            <li className="list-item"><a href={moviedb} target="_blank" rel="noopener noreferrer">TMBD Page</a></li>
                                        </ul>
                                    </div>
                                    <div className="tile is-child box">
                                        <div className="title is-5">Countries</div>
                                        <ul className="list">
                                            {this.props.movie.production.countries != null ? this.props.movie.production.countries.map ( (m) => <li className="list-item">{m.name}</li> ) : <li className="list-item">Movie is missing country data.</li>}
                                        </ul>
                                    </div>
                                    <div className="tile is-child box">
                                        <div className="title is-5">Keywords</div>
                                        <ul className="list">
                                            {this.props.movie.details.keywords != null ? this.props.movie.details.keywords.map ( (m) => <li className="list-item">{m.name}</li> ) : <li className="list-item">Movie is missing keywords data.</li>}
                                        </ul>
                                    </div>
                                    <div className="tile is-child box">
                                        <div className="title is-5">Genres</div>
                                        <ul className="list">
                                            {this.props.movie.details.genres != null ? this.props.movie.details.genres.map ( (m) => <li className="list-item">{m.name}</li>) : <li className="list-item">Movie is missing genre data.</li>}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div id="loader">
                            <img alt="content is loading" src={load} />
                        </div>
                    )}
                </div>
                {/*<div className="tile is-parent">*/}
                {/*    <CastCrewTabs movie={this.props.movie} dataDetailsLoaded={this.props.dataDetailsLoaded} showCastDetails={this.props.showCastDetails}/>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default MovieDetails