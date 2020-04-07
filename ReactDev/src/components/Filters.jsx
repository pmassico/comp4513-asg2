import React from "react";
import './Filters.css';
import CSSTransition from "react-transition-group/cjs/CSSTransition";

//This component has all the possible filters for the movie list
class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = { belowRadio: "", aboveRadio: "", betweenSliderStart: "", betweenSliderEnd: "" };
    }

    componentDidMount() {
        // show buttons when any checkbox is checked (filter/sort is applied)
        let radio = document.querySelectorAll(".filters-level-3 [type=radio]");
        let search = document.querySelector('#searchBox');
        let sorts = document.querySelectorAll(".clickableSorts");
        radio.forEach(r => {
            r.addEventListener('change', (e) => {
                document.querySelector("#apply-filter").classList.remove("hidden");
            });
        });
        search.addEventListener('change', (e) => {
            document.querySelector("#apply-filter").classList.remove("hidden");
        });
        sorts.forEach(s => {
            s.addEventListener('click', (e) => {
                document.querySelector("#clear-filter").classList.remove("hidden");
            });
        });

        // let bSlider = document.querySelector("#belowSlider");
        // bSlider.addEventListener('input', (e) => {
        //     document.querySelector("#below-value").textContent = bSlider.value;
        // });

        let sliders = document.querySelectorAll("[type=range]");
        let values = document.querySelectorAll(".slider-value p");
        let valueDiv = document.querySelectorAll(".slider-value");

        sliders.forEach((s, index) => {
            s.addEventListener('input', (e) => {
                // show bubble
                valueDiv[index].classList.remove("hidden");
                values[index].textContent = s.value;
            });
            s.addEventListener('blur', (e) => {
                valueDiv[index].classList.toggle("hidden");
            });
        });


    }

    //this will reset all filters applied
    clearAll = () => {
        this.props.resetFilters();
        this.props.clearSort();

        document.querySelector("#searchBox").value = "";

        document.querySelector("#beforeRadio").checked = false;
        document.querySelector("#afterRadio").checked = false;
        document.querySelector("#betweenRadio").checked = false;
        document.querySelector("#belowRadio").checked = false;
        document.querySelector("#aboveRadio").checked = false;
        document.querySelector("#betweenRadioRatings").checked = false;

        document.querySelector("#beforeRadioText").value = "";
        document.querySelector("#afterRadioText").value = "";
        document.querySelector("#betweenRadioTextStart").value = "";
        document.querySelector("#betweenRadioTextEnd").value = "";
        document.querySelector("#belowSlider").value = document.querySelector("#belowSlider").defaultValue;
        document.querySelector("#aboveSlider").value = document.querySelector("#aboveSlider").defaultValue;
        document.querySelector("#betweenSliderStart").value = document.querySelector("#betweenSliderStart").defaultValue;
        document.querySelector("#betweenSliderEnd").value = document.querySelector("#betweenSliderEnd").defaultValue;

        document.querySelector("#clear-filter").classList.toggle("hidden");
        document.querySelector("#apply-filter").classList.toggle("hidden");

        this.setState = { belowRadio: "", aboveRadio: "", betweenSliderStart: "", betweenSliderEnd: "" };
    };
    
    //this will apply any selected filters
    applyFilters = () => {
        let searchBox = document.querySelector("#searchBox").value;

        let beforeRadio = document.querySelector("#beforeRadio").checked;
        let afterRadio = document.querySelector("#afterRadio").checked;
        let betweenRadio = document.querySelector("#betweenRadio").checked;
        let belowRadio = document.querySelector("#belowRadio").checked;
        let aboveRadio = document.querySelector("#aboveRadio").checked;
        let betweenRadioRatings = document.querySelector("#betweenRadioRatings").checked;

        let beforeRadioText = document.querySelector("#beforeRadioText").value;
        let afterRadioText = document.querySelector("#afterRadioText").value;
        let betweenRadioTextStart = document.querySelector("#betweenRadioTextStart").value;
        let betweenRadioTextEnd = document.querySelector("#betweenRadioTextEnd").value;
        let belowSlider = document.querySelector("#belowSlider").value;
        let aboveSlider = document.querySelector("#aboveSlider").value;
        let betweenSliderStart = document.querySelector("#betweenSliderStart").value;
        let betweenSliderEnd = document.querySelector("#betweenSliderEnd").value;
        

        this.props.applyFilters(searchBox, beforeRadio, afterRadio, betweenRadio, beforeRadioText, afterRadioText, betweenRadioTextStart, betweenRadioTextEnd, belowRadio, aboveRadio, betweenRadioRatings, belowSlider, aboveSlider, betweenSliderStart, betweenSliderEnd);

        document.querySelector("#clear-filter").classList.remove("hidden");
        //document.querySelector("#apply-filter").classList.toggle("hidden");
        document.querySelector("input[type=checkbox]").checked = false;
    };

    handleChange = (e) => {
        let elements = this.state;

            elements[e.target.id] = e.target.value;
        
        this.setState(elements)
    }
    handleSearchBox = (e) => {
        document.querySelector("#beforeRadio").checked = false;
        document.querySelector("#afterRadio").checked = false;
        document.querySelector("#betweenRadio").checked = false;
        document.querySelector("#belowRadio").checked = false;
        document.querySelector("#aboveRadio").checked = false;
        document.querySelector("#betweenRadioRatings").checked = false;
    }

    render() {
        return (
            <div>
                <div>
                    <ul className="filter-dropdown">
                        <CSSTransition
                            in={true}
                            appear={true}
                            timeout={250}
                            classNames="fade"
                        >
                            <li>
                            <label htmlFor="filter" id="filter-label">filter</label>
                            <input type="checkbox" id="filter"/>
                                <ul className="filters-level-2">
                                    <li>
                                        <div className="control">
                                            <label htmlFor="year">year</label>
                                            <input type="checkbox" id="year"/>
                                            <ul className="filters-level-3">
                                                <li>
                                                    <label className="radio">
                                                        <input id="beforeRadio" type="radio" name="answer"/>
                                                        before
                                                    </label>
                                                    <input id="beforeRadioText" className="input" type="number"/>
                                                </li>
                                                <li>
                                                    <label className="radio">
                                                        <input id="afterRadio" type="radio" name="answer"/>
                                                        after
                                                    </label>
                                                    <input id="afterRadioText" className="input" type="number"/>

                                                </li>
                                                <li>
                                                    <label className="radio">
                                                        <input id="betweenRadio" type="radio" name="answer"/>
                                                        between
                                                    </label>
                                                    <input id="betweenRadioTextStart" className="input" type="number"/>
                                                    and
                                                    <input id="betweenRadioTextEnd" className="input" type="number"/>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="control">
                                            <label htmlFor="rating">rating</label>
                                            <input type="checkbox" id="rating"/>
                                            <ul className="filters-level-3">
                                                <li>
                                                    <label className="radio">
                                                        <input id="belowRadio" type="radio" name="answer"/>
                                                        below
                                                    </label>
                                                    <div><div className="slider-value hidden" id=""><p>{this.state.belowSlider}</p></div><input id="belowSlider" className="slider is-fullwidth" step="1" min="0" max="10" type="range" onChange={this.handleChange}/></div>
                                                </li>
                                                <li>
                                                    <label className="radio">
                                                        <input id="aboveRadio" type="radio" name="answer"/>
                                                        above
                                                    </label>
                                                    <div><div className="slider-value hidden" id="above-value"><p>{this.state.aboveSlider}</p></div><input id="aboveSlider" className="slider is-fullwidth" step="1" min="0" max="10" type="range" onChange={this.handleChange}/></div>
                                                </li>
                                                <li>
                                                    <label className="radio">
                                                        <input id="betweenRadioRatings" type="radio" name="answer"/>
                                                        between
                                                    </label>
                                                    <div><div className="slider-value hidden" id="lower-value"><p>{this.state.betweenSliderStart}</p></div><input id="betweenSliderStart" className="slider is-fullwidth" step="1" min="0" max="10" type="range" onChange={this.handleChange}/></div>
                                                    and
                                                    <div><div className="slider-value hidden" id="upper-value"><p>{this.state.betweenSliderEnd}</p></div><input id="betweenSliderEnd" className="slider is-fullwidth" step="1" min="0" max="10" type="range" onChange={this.handleChange}/></div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                        </li>
                        </CSSTransition>
                        <CSSTransition
                            in={true}
                            appear={true}
                            timeout={250}
                            classNames="fade"
                        >
                            <li>
                            <label htmlFor="sort" id="sort-label">sort</label>
                            <input type="checkbox" id="sort"/>
                                <ul className="filters-level-2">
                                    <li id="sort-name" class="clickableSorts" onClick={()=> this.props.sortList("title")} >name</li>
                                    <li id="sort-rating" class="clickableSorts" onClick={()=> this.props.sortList("ratings")}>rating</li>
                                    <li id="sort-release" class="clickableSorts" onClick={()=> this.props.sortList("release_date")}>release date</li>
                                </ul>
                        </li>
                        </CSSTransition>
                        <CSSTransition
                            in={true}
                            appear={true}
                            timeout={250}
                            classNames="fade"
                        >
                            <li>
                            <label htmlFor="search" id="search-label">search</label>
                            <input type="checkbox" id="search"/>
                            <ul>
                                <li>
                                    <div className="control">
                                        <input id="searchBox" className="input" type="text" placeholder="movie name" onSelect={this.handleSearchBox}/>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        </CSSTransition>
                    </ul>

                </div>
                <div id="filter-buttons">
                    <button className="button hidden" id="apply-filter" onClick={this.applyFilters}>apply</button>
                    <button className="button hidden" id="clear-filter" onClick={this.clearAll}>clear</button>
                </div>
                </div>
        );
    }
}

export default Filters