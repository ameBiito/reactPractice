import React from "react";

export default function Navbar(){
    return(
        <div id="Navbar">
            <img src={require("../../public/assets/world-logo.png")} className="nav--image"></img>
            <h3 className="nav--title">my travel journal</h3>
        </div>
    );
}