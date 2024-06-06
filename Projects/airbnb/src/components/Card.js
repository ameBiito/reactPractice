import React from "react";
import star from "../../public/assets/star.png"

export default function Card(props){
    let badgeText;
    if(props.elem.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if(props.elem.location === "Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={require(`../../public/assets/${props.elem.coverImg}`)} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.elem.stats.rating}</span>
                <span className="gray">({props.elem.stats.reviewCount}) • </span>
                <span className="gray">{props.elem.location}</span>
            </div>
            <p className="card--title">{props.elem.title}</p>
            <p className="card--price"><span className="bold">From ${props.elem.price}</span> / person</p>
        </div>
    );
}