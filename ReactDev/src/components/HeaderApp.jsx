import React from 'react';
import HeaderBar from './HeaderBar.jsx';
import About from './About.jsx';
import Profile from './Profile.jsx';
import './Header.css';
import Favorites from "./Favorites";

//This component is the header that hold the header components
const HeaderApp = function (props) {

    return (
        <header className="hero medium">
            <div className="hero-body">
                <HeaderBar />
                <a href="http://localhost:5000/logout">
                    <button className="button is-pulled-right">Logout</button>
                </a>
                <Profile showUserDetails={props.showUserDetails}/>
                <About />
                <Favorites movie={props.movie} showMovieDetails={props.showMovieDetails} deleteFav={props.deleteFav}/>
            </div>
        </header>
    );
}

export default HeaderApp;