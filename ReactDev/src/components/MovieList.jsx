import React from "react";
import SingleMovie from './SingleMovie.jsx';
import './MovieList.css';
import CSSTransition from "react-transition-group/cjs/CSSTransition";

//This component creates a movie list table that houses single movies
class MovieList extends React.Component {
    render() {
        if (this.props.movies.length >= 1) {
            return (
                <div>
                    {/*<table className="table is-striped is-bordered">*/}
                    {/*    <thead>*/}
                    {/*        <tr>*/}
                    {/*            <th></th>*/}
                    {/*            <th className="clickableSorts" onClick={()=> this.props.sortList("title")}>Title</th>*/}
                    {/*            <th className="clickableSorts" onClick={()=> this.props.sortList("release_date")}>Release Date</th>*/}
                    {/*            <th className="clickableSorts" onClick={()=> this.props.sortList("ratings")}>Rating</th>*/}
                    {/*            <th></th>*/}
                    {/*        </tr>*/}
                    {/*    </thead>*/}
                        <div className="movielist-container">

                            { this.props.movies.map( (m) =>
                                <CSSTransition
                                    in={true}
                                    appear={true}
                                    timeout={2000}
                                    classNames="cascade">
                                    <>
                                        <SingleMovie movie={m} key={m.id} showMovieDetails={this.props.showMovieDetails} addToFavs={this.props.addToFavs} />
                                    </>
                                </CSSTransition>
                            )
                            }

                            </div>
                </div>
            );
        } else
            return null; 
    }
}
export default MovieList