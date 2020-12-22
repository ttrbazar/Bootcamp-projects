import React from "react";
import MyPoems from "./MyPoems";
import { styleSheet } from "../styles";

export default function App() {

    const divStyle = {
        background: styleSheet.background
    }

    const footerStyle = {
        color: styleSheet.color,
        fontSize: styleSheet.fontSize
    }

    return (
        <div style={divStyle}>
            <h1 style={{color: "red"}}>Welcome To My Page</h1>
            <MyPoems></MyPoems>
            <footer style={footerStyle}>Thank You Visiting My Page!</footer>
        </div>
    );
}
