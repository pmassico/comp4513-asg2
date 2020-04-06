import React from 'react';
import HeaderBar from './HeaderBar.jsx';
import About from './About.jsx';
import './Header.css';
import Favorites from "./Favorites";

//This component is the header that hold the header components
const HeaderApp = function (props) {

    return (
        <header className="hero medium">
            <div className="hero-body">
                <HeaderBar />
                <About />
                <Favorites movie={props.movie} showMovieDetails={props.showMovieDetails} deleteFav={props.deleteFav}/>
            </div>
        </header>
    );
}

export default HeaderApp;