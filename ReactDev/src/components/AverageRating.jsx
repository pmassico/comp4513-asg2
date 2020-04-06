import React from "react";
import {dom} from "@fortawesome/fontawesome-svg-core";

class AverageRating extends React.Component {

    //This function will convert the rounded average rating to a series of star icons based on the number

    generateStars = () => {
        let roundedRating = Math.round((this.props.rating)*2)/2;
        //
        // let div = document.createElement("div");
        //
        // // 10, full star #, half star #, empty star #
        // let full = Math.floor(roundedRating);
        // let half = roundedRating - Math.floor(roundedRating) ;
        // let empty = Math.floor(10 - roundedRating);
        //
        // if (full > 0) {
        //     for (let i=0; i<full; i++) {
        //         let full_star = document.createElement("i");
        //         full_star.classList.add("fas", "fa-star");
        //         div.append(full_star);
        //         console.log(i);
        //     }
        // }
        // // add half star for decimal
        // if (half > 0) {
        //     let half_star = document.createElement("i");
        //     half_star.classList.add("fas", "fa-star-half-alt");
        //     div.append(half_star);
        // }
        // // add empty stars for empty
        // if (empty>0) {
        //     for (let i=0; i<empty; i++) {
        //         let empty_star = document.createElement("i");
        //         empty_star.classList.add("far", "fa-star");
        //         div.append(empty_star);
        //     }
        // }
        //
        // //finally add vote count
        // let votes = document.createElement("p");
        // votes.textContent = " (" + this.props.count + ")";
        //
        // div.append(votes);
        //
        // console.log(div);
        //
        // // return div with stars and text
        // return (div);

        if(roundedRating === 0){
            return(<div><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>);
        }
        else if(roundedRating === 0.5){
            return (<div><i className='fas fa-star-half-alt'></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>);
        }
        else if(roundedRating === 1){
            return(<div><i className='fas fa-star'></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>);
        }
        else if(roundedRating === 1.5){
            return(<div><i className='fas fa-star'></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>);
        }
        else if(roundedRating === 2){
            return(<div><i className='fas fa-star'></i><i className='fas fa-star'></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>);
        }
        else if(roundedRating === 2.5){
            return(<div><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star-half-alt'></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>);
        }
        else if(roundedRating === 3){
            return(<div><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>);
        }
        else if(roundedRating === 3.5){
            return(<div><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star-half-alt'></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>);
        }
        else if(roundedRating === 4){
            return(<div><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>);
        }
        else if(roundedRating === 4.5){
            return(<div><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star-half-alt'></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>);
        }
        else if(roundedRating === 5){
            return(<div><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>);
        }
        else if(roundedRating === 5.5){
            return(<div><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star-half-alt'></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>);
        }
        else if(roundedRating === 6){
            return(<div><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>);
        }
        else if(roundedRating === 6.5){
            return(<div><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star-half-alt'></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>);
        }
        else if(roundedRating === 7){
            return(<div><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>);
        }
        else if(roundedRating === 7.5){
            return(<div><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>);
        }
        else if(roundedRating === 8){
            return(<div><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className="far fa-star"></i><i className="far fa-star"></i></div>);
        }
        else if(roundedRating === 8.5){
            return(<div><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star-half-alt'></i><i className="far fa-star"></i></div>);
        }
        else if(roundedRating === 9){
            return(<div><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className="far fa-star"></i></div>);
        }
        else if(roundedRating === 9.5){
            return(<div><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star-half-alt'></i></div>);
        }
        else if(roundedRating === 10){
            return(<div><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i></div>);
        }
    };
    
    render() {
        return this.generateStars();
    }
}
export default AverageRating