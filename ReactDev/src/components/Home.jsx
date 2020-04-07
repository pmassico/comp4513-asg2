import React from "react";
import { Link } from 'react-router-dom';
import imgUrl from '../photos/splash.jpg';
import './Home.css';
import CSSTransition from "react-transition-group/cjs/CSSTransition";
import TransitionGroup from "react-transition-group/cjs/TransitionGroup";

//This component is the home page that the user will see upon website visit, or clicking the website logo
class Home extends React.Component {

    render() {
        return (
            <div className="box"
                style = {{ backgroundImage: `url(${imgUrl})`,
                            'min-height': '800px',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                         }}>

                <div className="container" id="home-container">
                    <h1 className="title is-1">Movie Buddy</h1>
                    <CSSTransition
                        in={true}
                        appear={true}
                        timeout={300}
                        classNames="fade"
                    >
                        <div className="card" id="home-card">
                            <div className="card-content">
                                <input className="input"
                                       type="text"
                                       id="searchBox"
                                       name="search"
                                       placeholder="Movie Title" />

                                <Link to='/browse'>
                                    <button className="button is-primary"
                                            onClick={() => {
                                                this.props.searchFilter(document.querySelector("#searchBox").value)
                                            }}>Search</button>
                                </Link>

                                <Link to='/browse'>
                                    <button className="button"
                                            onClick={this.props.resetFilters}
                                            style={{"margin-right": 0}}>Browse All</button>
                                </Link>
                            </div>
                        </div>
                    </CSSTransition>

                </div>
                <div className="box" id='credit'>
                    <div className="content has-text-centered">photo by <a href='https://unsplash.com/@dmjdenise?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>denise jans</a> on <a href='https://unsplash.com/s/photos/cinema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>unsplash</a></div>
                </div>

                            {/*<div className="container is-fluid">*/}
                            {/*    <div className="notification">*/}
                            {/*        <h1 className="title is-2 is-dark">Movie Browser</h1>*/}
                            {/*        <label className="label is-large" htmlFor="search">Title: </label>*/}
                            {/*        <input className="input is-dark" id="searchBox" type="text" name="search"/>*/}
                            {/*        <p>*/}
                            {/*            <Link to='/browse'>*/}
                            {/*                <button className="button is-dark is-pulled-left" onClick={() => {*/}
                            {/*                    this.props.searchFilter(document.querySelector("#searchBox").value)*/}
                            {/*                }}>*/}
                            {/*                    Show Matching Movies*/}
                            {/*                </button>*/}
                            {/*            </Link>*/}
                            {/*            <Link to='/browse'>*/}
                            {/*                <button className="button is-dark is-pulled-right"*/}
                            {/*                        onClick={this.props.resetFilters}>Show All Movies*/}
                            {/*                </button>*/}
                            {/*            </Link>*/}
                            {/*        </p>*/}
                            {/*    </div>*/}
                            {/*</div>*/}


            </div>

        );
    }
}   

export default Home