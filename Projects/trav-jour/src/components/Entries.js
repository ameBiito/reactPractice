import React from "react";

import locationLogo from "../../public/assets/locationLogo.png";

export default function Entries(props){
    return(
        <div id="entry--container">
            <img src={require(`../../public/assets/${props.elem.img}`)} className="entry--image" />
            <div className="styling-box">
                <div id="entry--header">
                    <img src={locationLogo} className="entry--lLogo" />
                    <h3 className="entry--location">{props.elem.location}</h3>
                    <a href={props.elem.googleMapsUrl} className="entry--link">View on Google Maps</a>
                </div>
                <h1 className="entry--title">{props.elem.title}</h1>
                <h4 className="entry--dates">{props.elem.startDate} - {props.elem.endDate}</h4>
                <p className="entry--descr">{props.elem.description}</p>
            </div>
        </div>
    );
}