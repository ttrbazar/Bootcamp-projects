import React, { Component } from "react";

export default class Video extends Component {
    render() {
        return (
            < div >
            <video src={this.props.url} controls></video>
            </div >
        )
    }
}