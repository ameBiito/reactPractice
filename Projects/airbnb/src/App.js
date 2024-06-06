import React from "react";
import "./App.css"

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

import rawCardData from "./data.js";

const cardData = rawCardData.map((elem) => {
    return (
        <Card
            key={elem.id}         //The key is required by react, it must be unique 
            elem={elem}           //Now, in order to refer to the object properties, we need to do it as props.elem.something
                                 // Same thing using spread syntax {...elem}, the difference is that we'll access them using prop.something
        />
    )
})

const App = () => {
    return(
        <div id="main-container">
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cardData}
            </section>
        </div>
    );
};

export default App;