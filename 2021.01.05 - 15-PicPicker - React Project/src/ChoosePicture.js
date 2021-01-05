import React from "react";

export default function ChoosePicture(props) {
    // console.log(props);
    return (
        <div>
            <h1>Cute Pictures</h1>
            <img src={props.src} alt="cute" />
            <br />
            <button onClick={props.handleOnButtonClick}>{props.isPicChanging ? "STOP" : "START"}</button>
        </div>
    )
}