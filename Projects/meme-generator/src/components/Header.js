import React from "react";

import headerLogo from "../../public/assets/soyjack.jpg"

export default function Header(){
    return(
        <div id="header--container">
            <img src={headerLogo} className="header--image"></img>
            <h2 className="header--title">Meme Generator</h2>
        </div>
    );
}