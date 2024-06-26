import React from "react";
import "./App.css";

import Header from "./components/Header";
import Meme from "./components/Meme";

const App = () => {
    return(
        <div id="main--container">
            <Header />
            <Meme />
        </div>
    );
}

export default App;