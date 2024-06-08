import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Entries from "./components/Entries.js";

import rawEntries from "../public/rawEntries.js";

const entries = rawEntries.map((elem) => {
    return(
        <Entries 
            key={elem.id}
            elem={elem}
        />
    )
});

const App = () => {
    return(
        <div id="main-container">
            <Navbar />
            <div>
                {entries}
            </div>
        </div> 
    );
};

export default App;