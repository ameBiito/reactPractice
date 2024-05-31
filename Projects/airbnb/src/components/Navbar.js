import React from "react";

import logo from "../../public/assets/airbnb-logo.png";
export default function Navbar(){
    
    return(
        <div id="nav">
            <img id="nav-logo" src={logo}></img>
        </div>
    );
}