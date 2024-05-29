//Literally a component of react

import React from "react";
import "./App.css";

import ProfileImage from "./components/ProfileImage";
import MainInfo from "./components/MainInfo";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";

const App = () => {
    return(
        <div id="main-container">
            <ProfileImage />
            <MainInfo />
            <ContactInfo />
            <Footer />
        </div>
    );
};

export default App;