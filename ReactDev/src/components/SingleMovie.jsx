import React from "react";
import { Link } from 'react-router-dom';
import './SingleMovie.css';

//This component creates a single movie entry for the parent table component
class SingleMovie extends React.Component {
    //on click show movie details
    handleViewClick = () => {
        this.props.showMovieDetails(this.props.movie);
    };

    render() {
        const imgURL = `https://image.tmdb.org/t/p/w92${this.props.movie.poster}`;
        return (
            <div className="card single-movie">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image">
                                <Link to='/details'>
                                    <img src={imgURL} onClick={ this.handleViewClick } title={this.props.movie.title} alt={this.props.movie.title} />
                                </Link>
                            </figure>
                        </div>
                        <div className="media-content">
                            <Link to='/details' id="single-movie-title" ><p className="title is-4" onClick={ this.handleViewClick } >{this.props.movie.title}</p></Link>
                            <p className="subtitle is-7">{this.props.movie.overview}</p>
                        </div>
                    </div>

                </div>
                <footer className="card-footer">
                    <p className="card-footer-item runtime" id="footer-runtime">{this.props.movie.runtime} min</p>
                    <p className="card-footer-item" id="footer-release">
                        {this.props.movie.release_date}
                    </p>
                    <p className="card-footer-item" id="footer-details" onClick={ this.handleViewClick }><Link to="/details">Details</Link></p>
                    <button className="card-footer-item button" id="footer-button" onClick={()=> this.props.addToFavs(this.props.movie) }>❤</button>
                </footer>
            </div>


            // <tr>
            //     <td><Link to='/details'>
            //             <img src={imgURL} onClick={ this.handleViewClick } title={this.props.movie.title} alt={this.props.movie.title} />
            //         </Link>
            //     </td>
            //     <td>
            //         <Link to='/details' style={{ textDecoration: 'none' }}>
            //             <h3 onClick={ this.handleViewClick }>{this.props.movie.title}</h3>
            //         </Link>
            //     </td>
            //     <td>{this.props.movie.release_date}</td>
            //     <td>{this.props.movie.ratings.average}</td>
            //     <td>
            //         <Link style={{ textDecoration: 'none' }} to='/details'>
            //             <button className="button is-dark" onClick={ this.handleViewClick }>View</button>
            //         </Link>
            //         <button className="button is-dark" onClick={()=> this.props.addToFavs(this.props.movie) }>❤</button>
            //     </td>
            // </tr>
        );
    }
}

export default SingleMovie