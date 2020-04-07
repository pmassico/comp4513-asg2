import React from 'react';
import './App.css';
import HeaderApp from './components/HeaderApp.jsx';
import MovieBrowser from './components/MovieBrowser.jsx';
import Favorites from './components/Favorites.jsx';

import Route from 'react-router-dom/Route.js';
import Home from './components/Home.jsx';
import MovieDetails from './components/MovieDetails.jsx';
import CastDetails from './components/CastDetails.jsx';

//This is the main class component that controls the website
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movies: [], favs: [], currentMovie: [], singleMovieDetails: [], currentCast: [], singleCastDetails: [], movies_unfiltered: [], dataLoaded: false, dataDetailsLoaded: false, castDetailsLoaded: false, homeSearchValue: "", userData: {} };
    }

    //get initial data and save to local storage, or get from local storage if it already exists
    async componentDidMount() {
        let moviesLocalStorage = null;

        if(moviesLocalStorage == null) {
            try {
                const url = //"https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL";
                "https://damp-oasis-24034.herokuapp.com/api/brief/";
                const response = await fetch(url);
                const jsonData = await response.json();
                //https://www.c-sharpcorner.com/UploadFile/fc34aa/sort-json-object-array-based-on-a-key-attribute-in-javascrip/
                jsonData.sort(function(a, b) {  
                    if (a.title > b.title) {  
                        return 1;  
                    } else if (a.title < b.title) {  
                        return -1;  
                    }  
                    return 0;  
                })
                localStorage.setItem('movieList', JSON.stringify(jsonData));
                moviesLocalStorage = JSON.parse(localStorage.getItem('movieList'));
                this.setState( {movies: moviesLocalStorage, dataLoaded: true, movies_unfiltered: moviesLocalStorage} );
            }
            catch (error) {
                console.error(error);
            }
        }
        else{
            try {
                moviesLocalStorage = JSON.parse(localStorage.getItem('movieList'));
                this.setState( {movies: moviesLocalStorage, dataLoaded: true, movies_unfiltered: moviesLocalStorage} );
            }
            catch(err) {
                console.log(err);
            }
        }
        const initialize = async () => {
            await this.showUserDetails();
            await this.fetchFav();
        }
        initialize();
    }

    //get the details of a specific requested movie (requires new fetch)
     showMovieDetails = async (movie) => {
        this.setState({ currentMovie: movie });
        const url = //`https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id=${movie.id}`;
        `https://damp-oasis-24034.herokuapp.com/api/movies/${movie.id}`;

        const request = async () => {
          
            const response = await fetch(url);
            const json = await response.json();
          
            this.setState( {singleMovieDetails: json, dataDetailsLoaded: true } );
        };

        request();
    };
     //get cast details (requires fetch to themoviedb API)
     showCastDetails = (cast) => {
        this.setState({ currentCast: cast });
        const url = `https://api.themoviedb.org/3/person/${cast.id}?api_key=53a0521887b67f4668157a5b9ae0c44b`;

        const request = async () => {
            const response = await fetch(url);
            const json = await response.json();
            this.setState( {singleCastDetails: json, castDetailsLoaded: true } );
        }

        request();
    }
     
     //sort the movie list by the requested (clicked) value
    sortList = (sortBy) => {
        let updatedList = this.state.movies;
        
        if(sortBy === "title"){
            updatedList.sort(function(a, b) {  
            if (a.title > b.title) {  
                return 1;  
            } else if (a.title < b.title) {  
                return -1;  
            }  
            return 0;  
            })
        }
        else if(sortBy === "release_date"){
            updatedList.sort(function(a, b) {  
            if (a.release_date < b.release_date) {  
                return 1;  
            } else if (a.release_date > b.release_date) {  
                return -1;  
            }  
            return 0;  
            })
        }
        else if(sortBy === "ratings"){
            updatedList.sort(function(a, b) {  
            if (a.ratings.average < b.ratings.average) {  
                return 1;  
            } else if (a.ratings.average > b.ratings.average) {  
                return -1;  
            }  
            return 0;  
            })
        }
        this.setState( {movies: updatedList} );
    }

    //reset all filters
    resetFilters = () => {
        this.setState( {movies: this.state.movies_unfiltered} );
    }

    //filter specifically for the home page search box, this function was base off: https://codepen.io/mtclmn/pen/QyPVJp
    searchFilter = (searchBox) => {
        const url = `https://damp-oasis-24034.herokuapp.com/api/find/title/${searchBox.toLowerCase()}`;

        const request = async () => {
          
            const response = await fetch(url);
            const json = await response.json();
           
            this.setState( {movies: json, dataDetailsLoaded: true } );
        }
        request();
    }
    
    //applies any filters that were requested by the user
    applyFilters = (searchBox, beforeRadio, afterRadio, betweenRadio, beforeRadioText, afterRadioText, betweenRadioTextStart, betweenRadioTextEnd, belowRadio, aboveRadio, betweenRadioRatings, belowSlider, aboveSlider, betweenSliderStart, betweenSliderEnd) => {
        
        if(beforeRadioText !== "" && beforeRadio == true){
            const url = `https://damp-oasis-24034.herokuapp.com/api/find/year/0/${beforeRadioText}`;
            const request = async () => {
          
                const response = await fetch(url);
                const json = await response.json();
          
                this.setState( {movies: json, dataDetailsLoaded: true } );
            }
            request();
        }
        else if(afterRadioText !== "" && afterRadio === true){
            const url = `https://damp-oasis-24034.herokuapp.com/api/find/year/${afterRadioText}/3000`;
            const request = async () => {
              
                const response = await fetch(url);
                const json = await response.json();
           
                this.setState( {movies: json, dataDetailsLoaded: true } );
            }
            request();
        }
        else if(betweenRadioTextStart !== "" && betweenRadioTextEnd != "" && betweenRadio == true){
            const url = `https://damp-oasis-24034.herokuapp.com/api/find/year/${afterRadioText}/${beforeRadioText}`;
            const request = async () => {
               
                const response = await fetch(url);
                const json = await response.json();
               
                this.setState( {movies: json, dataDetailsLoaded: true } );
            }
            request();
        }
        else if(belowSlider !== "" && belowRadio == true){
            const url = `https://damp-oasis-24034.herokuapp.com/api/find/rating/0/${belowSlider}`;
            const request = async () => {
               
                const response = await fetch(url);
                const json = await response.json();
               
                this.setState( {movies: json, dataDetailsLoaded: true } );
            }
            request();
        }
        else if(aboveSlider !== "" && aboveRadio == true){
            const url = `https://damp-oasis-24034.herokuapp.com/api/find/rating/${aboveSlider}/11`;
            const request = async () => {
               
                const response = await fetch(url);
                const json = await response.json();
                
                this.setState( {movies: json, dataDetailsLoaded: true } );
            }
            request();
        }
        else if(betweenSliderStart !== "" && betweenSliderEnd != "" && betweenRadioRatings == true){
            const url = `https://damp-oasis-24034.herokuapp.com/api/find/rating/${betweenSliderStart}/${betweenSliderEnd}`;
            const request = async () => {
                
                const response = await fetch(url);
                const json = await response.json();
              
                this.setState( {movies: json, dataDetailsLoaded: true } );
            }
            request();
        }
        else if(searchBox != ""){
            const url = `https://damp-oasis-24034.herokuapp.com/api/find/title/${searchBox.toLowerCase()}`;
            const request = async () => {
                
                const response = await fetch(url);
                const json = await response.json();
                
                this.setState( {movies: json, dataDetailsLoaded: true } );
            }
            request();
        }
    }
    showUserDetails = async () => {
        const url = //`https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id=${movie.id}`;
        `https://damp-oasis-24034.herokuapp.com/api/login/user`;

        
          
            const response = await fetch(url);
            const json = await response.json();
            this.setState( {userData: json} );
        

        
    };
    //adds a movie to favorites
    addToFavs = async (movie) => {
        let check = false
        for(let f of this.state.favs){
            if(f.id == movie.id){
                check = true;
            }
        }
        if(check){
            alert("You have already added this movie to your favorites.");
        }
        else{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userData: this.state.userData, favourite: movie })
        };
        const response = await fetch(`https://damp-oasis-24034.herokuapp.com/api/favourites/`, requestOptions);
        const data = await response.json();
        this.fetchFav();
        this.forceUpdate();
    }
        /*
        //1. retrieve data from state
        const data = this.state.favs;
        let alreadyExists = false;

        var objectIndex = data.map(function(item) { return item.movie.id; }).indexOf(movie.id);

        if(objectIndex != -1){
            alreadyExists = true;
        }

        if(alreadyExists){
            alert("You have already added this movie to your favorites.");
        }
        else{
            //2. modify data
            data.push({movie});
            //3. add back to state
            this.setState({favs:data});
        }*/


    };

    //deletes a movie from the favorites list
    deleteFav = async (movie) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userData: this.state.userData, favourite: movie })
        };
        const response = await fetch(`https://damp-oasis-24034.herokuapp.com/api/favourites/`, requestOptions);
        const data = await response.json();
        this.fetchFav();
        this.forceUpdate();
        /*
        // source: http://stackoverflow.com/questions/16491758/remove-objects-from-array-by-object-property
        const data = this.state.favs;
        // get index of object with movie id
        var removeIndex = data.map(function(item) { return item.movie.id; }).indexOf(movieID);
        // remove object
        data.splice(removeIndex, 1);
        //3. add back to state
        this.setState({favs:data});
        // show dropdown again*/
    };
    fetchFav = async () => {
        const response = await fetch(`https://damp-oasis-24034.herokuapp.com/api/favourites/${this.state.userData.id}`);
        const data = await response.json();
        this.setState( {favs: data});
    }

    render() {
        return (    
            <main>
            <Route path='/' exact
                render={ (props) =>
                            <Home
                                searchFilter={this.searchFilter}
                                resetFilters={this.resetFilters}
                            />
                }
            />    
            <Route path='/home' exact 
                render={ (props) =>
                            <Home
                                searchFilter={this.searchFilter}
                                resetFilters={this.resetFilters}
                            />

                }
            />
            <Route path='/details' exact
            render={ (props) =>
            <React.Fragment>
            <HeaderApp movie={this.state.favs} showMovieDetails={this.showMovieDetails} deleteFav={this.deleteFav}/>
                <MovieDetails
                    movie={this.state.singleMovieDetails}
                    selectedMovie={this.state.currentMovie}
                    addToFavs={this.addToFavs}
                    dataDetailsLoaded={this.state.dataDetailsLoaded}
                    showCastDetails={this.showCastDetails}
                />
            </React.Fragment>
            }
            />
            <Route path='/details/cast' exact
            render={ (props) =>
                <React.Fragment>
                <HeaderApp movie={this.state.favs} showMovieDetails={this.showMovieDetails} deleteFav={this.deleteFav}/>
                <CastDetails
                    movie={this.state.singleMovieDetails} 
                    cast={this.state.singleCastDetails} 
                    selectedCast={this.state.currentCast}
                    castDetailsLoaded={this.state.castDetailsLoaded}
                    dataDetailsLoaded={this.state.dataDetailsLoaded}
                    showCastDetails={this.showCastDetails}
                />
            </React.Fragment>
            }
            />
            <Route path='/browse' exact
            render={ (props) =>
                <React.Fragment>
                <HeaderApp movie={this.state.favs} showMovieDetails={this.showMovieDetails} deleteFav={this.deleteFav}/>
                {/*<Favorites movie={this.state.favs} showMovieDetails={this.showMovieDetails} deleteFav={this.deleteFav} />*/}
                <MovieBrowser
                    movies={this.state.movies}
                    updatePhoto={this.updatePhoto}
                    addToFavs={this.addToFavs} 
                    showMovieDetails={this.showMovieDetails}
                    dataLoaded={this.state.dataLoaded}
                    applyFilters={this.applyFilters}
                    resetFilters={this.resetFilters}
                    sortList={this.sortList}
                />
            </React.Fragment>
            }
            />
        </main>
    );
    }
}

export default App;
