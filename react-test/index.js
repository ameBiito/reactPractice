import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App.js"

const appRouting = (
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
    </Router>
);

ReactDOM.createRoot(document.getElementById("root")).render(appRouting);
