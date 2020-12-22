import React, { Component } from "react";
import { styleSheet } from "../styles";

export default class MyPoems extends Component {
    render() {

        const h1Style = {
            color: styleSheet.color,
            fontSize: styleSheet.fontSize
        }

        const pStyle = {
            color: "pink",
        }

        return (
            <div>
                <h1 style={h1Style}>SNOW IN THE MORNING</h1>
                <p style={pStyle}>The couple is traveling up the mountain.<br/>
                They have been traveling a long time to get to the mountain.<br/>
                They left early with their son who strums<br/>
                sweet songs with his fingers,<br/>
                songs his mother sang when she was young,<br/>
                singing sweetly like him for...</p>
            </div>
        )
    }
}