import React from "react";
import './Filters.css';

//This component has all the possible filters for the movie list
class Filters extends React.Component {

    //this will reset all filters applied
    clearAll = () => {
        this.props.resetFilters();
        document.querySelector("#searchBox").value = "";
        document.querySelector("#beforeRadio").checked = false;
        document.querySelector("#afterRadio").checked = false;
        document.querySelector("#betweenRadio").checked = false;
        document.querySelector("#beforeRadioText").value = "";
        document.querySelector("#afterRadioText").value = "";
        document.querySelector("#betweenRadioTextStart").value = "";
        document.querySelector("#betweenRadioTextEnd").value = "";
        document.querySelector("#belowRadio").checked = false;
        document.querySelector("#aboveRadio").checked = false;
        document.querySelector("#betweenRadioRatings").checked = false;
        document.querySelector("#belowSlider").value = document.querySelector("#belowSlider").defaultValue;
        document.querySelector("#aboveSlider").value = document.querySelector("#aboveSlider").defaultValue;
        document.querySelector("#betweenSliderStart").value = document.querySelector("#betweenSliderStart").defaultValue;
        document.querySelector("#betweenSliderEnd").value = document.querySelector("#betweenSliderEnd").defaultValue;
    };
    
    //this will apply any selected filters
    applyFilters = () => {
        let searchBox = document.querySelector("#searchBox").value;
        let beforeRadio = document.querySelector("#beforeRadio").checked;
        let afterRadio = document.querySelector("#afterRadio").checked;
        let betweenRadio = document.querySelector("#betweenRadio").checked;
        let beforeRadioText = document.querySelector("#beforeRadioText").value;
        let afterRadioText = document.querySelector("#afterRadioText").value;
        let betweenRadioTextStart = document.querySelector("#betweenRadioTextStart").value;
        let betweenRadioTextEnd = document.querySelector("#betweenRadioTextEnd").value;
        let belowRadio = document.querySelector("#belowRadio").checked;
        let aboveRadio = document.querySelector("#aboveRadio").checked;
        let betweenRadioRatings = document.querySelector("#betweenRadioRatings").checked;
        let belowSlider = document.querySelector("#belowSlider").value;
        let aboveSlider = document.querySelector("#aboveSlider").value;
        let betweenSliderStart = document.querySelector("#betweenSliderStart").value;
        let betweenSliderEnd = document.querySelector("#betweenSliderEnd").value;
        
        this.props.applyFilters(searchBox, beforeRadio, afterRadio, betweenRadio, beforeRadioText, afterRadioText, betweenRadioTextStart, betweenRadioTextEnd, belowRadio, aboveRadio, betweenRadioRatings, belowSlider, aboveSlider, betweenSliderStart, betweenSliderEnd);
    };

    render() {
        return (
            <div>
                <div>
                    <ul className="filter-dropdown">
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
                                                    <input id="beforeRadioText" className="input" type="text" placeholder="Before"/>
                                                </li>
                                                <li>
                                                    <label className="radio">
                                                        <input id="afterRadio" type="radio" name="answer"/>
                                                        after
                                                    </label>
                                                    <input id="afterRadioText" className="input" type="text" placeholder="After"/>
                                                </li>
                                                <li>
                                                    <label className="radio">
                                                        <input id="betweenRadio" type="radio" name="answer"/>
                                                        between
                                                    </label>
                                                    <input id="betweenRadioTextStart" className="input" type="text" placeholder="Between (Start)"/>
                                                    <input id="betweenRadioTextEnd" className="input" type="text" placeholder="Between (End)"/>
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
                                                    <div>0<input id="belowSlider" className="slider is-fullwidth" step="1" min="0" max="10" type="range"/>10</div>
                                                </li>
                                                <li>
                                                    <label className="radio">
                                                        <input id="aboveRadio" type="radio" name="answer"/>
                                                        above
                                                    </label>
                                                    <div>0<input id="aboveSlider" className="slider is-fullwidth" step="1" min="0" max="10" type="range"/>10</div>
                                                </li>
                                                <li>
                                                    <label className="radio">
                                                        <input id="betweenRadioRatings" type="radio" name="answer"/>
                                                        between
                                                    </label>
                                                    <div>0<input id="betweenSliderStart" className="slider is-fullwidth" step="1" min="0" max="10" type="range"/>10</div>
                                                    <div>0<input id="betweenSliderEnd" className="slider is-fullwidth" step="1" min="0" max="10" type="range"/>10</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                        </li>
                        <li>
                            <label htmlFor="sort" id="sort-label">sort</label>
                            <input type="checkbox" id="sort"/>
                                <ul className="filters-level-2">
                                    <li>name</li>
                                    <li>rating</li>
                                    <li>release date</li>
                                </ul>
                        </li>
                        <li>
                            <label htmlFor="search" id="search-label">search</label>
                            <input type="checkbox" id="search"/>
                            <ul>
                                <li>
                                    <div className="control">
                                        <input id="searchBox" className="input" type="text" placeholder="Filter by Movie Name"/>
                                    </div>
                                </li>
                            </ul>
                        </li>

                    </ul>

                    </div>
                    {/*<div className="arrowPointerFilter">*/}
                    {/*    <i className="fas fa-arrow-circle-left" onClick={this.props.hideFilters}></i>*/}
                    {/*</div>*/}
                    <button className="button" onClick={this.applyFilters}>Filter</button>
                    <button className="button" onClick={this.clearAll}>Clear</button>
                </div>
        );
    }
}

export default Filters