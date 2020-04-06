import React from "react";
import FavoriteItem from './FavoriteItem.jsx';
import './Favorites.css';

//This component holds a set of favorites called by <FavoriteItem/>
class Favorites extends React.Component {
    componentDidMount() {
        // from
        let dropdown = document.querySelector('.dropdown');
        dropdown.addEventListener('click', function(event) {
            event.stopPropagation();
            dropdown.classList.toggle('is-active');
        });
        document.addEventListener('click', (e) => {
            //dropdown.classList.remove('is-active');
        })
    }

    //hides the favorite list content
    hideFav = () => {
        let content = document.querySelector("#favContent");
        content.classList.add("is-hidden");
        let upArrow = document.querySelector("#hiddenContent");
        upArrow.classList.remove("is-hidden");
    }
    
    //shows the favorite ist content
    showFav = () => {
        let content = document.querySelector("#favContent");
        content.classList.remove("is-hidden");
        let upArrow = document.querySelector("#hiddenContent");
        upArrow.classList.add("is-hidden");
    };

    render() {

        return (
            <div className="dropdown is-pulled-right">
                <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Favorites</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-down" aria-hidden="true"/>
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        <div className="dropdown-item"><p>Press ❤ to add a favourite!</p></div>
                        <div className="dropdown-item hidden"><p>Press X to remove a favourite</p></div>
                        {this.props.movie && this.props.movie.map( (m) => <FavoriteItem movie={m.movie} key={m.movie.id} showMovieDetails={this.props.showMovieDetails} deleteFav={this.props.deleteFav} />)}
                        {}
                        {/*<div className="dropdown-item">*/}
                        {/*    <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>*/}
                        {/*</div>*/}
                        {/*<hr className="dropdown-divider"/>*/}
                        {/*<div className="dropdown-item">*/}
                        {/*    <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>*/}
                        {/*</div>*/}
                        {/*<hr className="dropdown-divider"/>*/}
                        {/*<a href="#" className="dropdown-item">*/}
                        {/*    This is a link*/}
                        {/*</a>*/}
                    </div>
                </div>
            </div>
            // <section className="box">
            //     <div id="favContent">
            //         <h1 className="title is-4">❤ Favorites</h1>
            //         <div className="columns is-multiline">
            //             {this.props.movie && this.props.movie.map( (m) => <FavoriteItem movie={m.movie} key={m.movie.id} showMovieDetails={this.props.showMovieDetails} deleteFav={this.props.deleteFav} />)}
            //         </div>
            //         <div className="arrowPointer">
            //             <i className="fa fa-arrow-circle-up" onClick={this.hideFav}></i>
            //         </div>
            //     </div>
            //     <div id="hiddenContent" className="is-hidden">
            //         <div className="arrowPointer">
            //             <i className="fa fa-arrow-circle-down" onClick={this.showFav}></i>
            //         </div>
            //     </div>
            // </section>
        );
    }
}

export default Favorites