import React from "react";
import Image from "../../public/df.jpg";

console.log(Image);

export default function ProfileImage(){
    return (
        <img id="main-image" src={Image}></img>
    );
}