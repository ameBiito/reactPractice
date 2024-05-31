import React from "react";
import "./App.css"

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
    return(
        <div id="main-container">
            <Navbar />
            <Hero />
        </div>
    );
};

export default App;