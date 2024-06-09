import React from "react";

export default function Meme(){
    return(
        <main id="meme--main">
            <div className="meme--form">
                <input 
                    type="text"
                    placeholder="Top Text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input"
                />
                <button className="form--button">Get a new meme image 🖼</button>
            </div>
        </main>
    )
}