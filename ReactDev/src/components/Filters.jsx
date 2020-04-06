import React from "react";
import './Filters.css';

//This component has all the possible filters for the movie list
class Filters extends React.Component {
    componentDidMount() {
        // show apply button when any checkbox is checked
        let radio = document.querySelectorAll("[type=radio]");
        radio.forEach(r => {
            r.addEventListener('change', (e) => {
                document.querySelector("#apply-filter").classList.remove("hidden");
            });
        })
    }

    //this will reset all filters applied
    clearAll = () => {
        this.props.resetFilters();
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

        this.addTags(searchBox, beforeRadio, afterRadio, betweenRadio, beforeRadioText, afterRadioText, betweenRadioTextStart, betweenRadioTextEnd, belowRadio, aboveRadio, betweenRadioRatings, belowSlider, aboveSlider, betweenSliderStart, betweenSliderEnd);
        document.querySelector("#clear-filter").classList.remove("hidden");
        document.querySelector("#apply-filter").classList.toggle("hidden");
        document.querySelector("input[type=checkbox]").checked = false;
    };

    // wait until filters are turned into routes
    addTags = (...filters) => {
        filters.forEach(f => {
            if (f != null && f !== false && f !== true) {
                // let tag = <div className="tag">{f}</div>;
                // document.querySelector("#filter-buttons").appendChild(tag);
            }
        });
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
                                                    <div><input id="belowSlider" className="slider is-fullwidth" step="1" min="0" max="10" type="range"/></div>
                                                </li>
                                                <li>
                                                    <label className="radio">
                                                        <input id="aboveRadio" type="radio" name="answer"/>
                                                        above
                                                    </label>
                                                    <div><input id="aboveSlider" className="slider is-fullwidth" step="1" min="0" max="10" type="range"/></div>
                                                </li>
                                                <li>
                                                    <label className="radio">
                                                        <input id="betweenRadioRatings" type="radio" name="answer"/>
                                                        between
                                                    </label>
                                                    <div><input id="betweenSliderStart" className="slider is-fullwidth" step="1" min="0" max="10" type="range"/></div>
                                                    and
                                                    <div><input id="betweenSliderEnd" className="slider is-fullwidth" step="1" min="0" max="10" type="range"/></div>
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
                                        <input id="searchBox" className="input" type="text" placeholder="movie name"/>
                                    </div>
                                </li>
                            </ul>
                        </li>

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