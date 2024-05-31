import React from "react";

import grid from "../../public/assets/photo-grid.png"

export default function Hero(){
    return(
        <div>
            <img src={grid} id="hero--image"></img>
            <h1 id="hero--title">Online Experiences</h1>
            <p id="hero--p">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    );
}