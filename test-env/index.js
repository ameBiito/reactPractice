import React from "react"
import ReactDom from "react-dom/client"

const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDom.createRoot(document.getElementById("root")).render(navbar);  // react 18 way of rendering 