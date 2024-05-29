import React from "react";
import fblogo from "../../public/fblogo.png"
import instalogo from "../../public/instalogo.png"
import xlogo from "../../public/xlogo.png"

export default function Footer(){
    return (
        <div id="logos">
            <img src={fblogo} className="sclimg"></img>
            <img src={instalogo}className="sclimg"></img>
            <img src={xlogo} className="sclimg"></img>
            <h5>yuki(*_*)</h5>
        </div>
    );
}