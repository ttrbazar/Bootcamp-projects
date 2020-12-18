import React, { Component } from "react";

export default class Entry extends Component {
    render() {
        return (
            <div className="term">
                <div className="dt">
                    <span className="emoji">{this.props.emoji}</span>
                    <span>{this.props.name}</span>
                </div>
                <div className="dd">
                    <span>{this.props.meaning}</span>
                </div>
            </div>
        )
    }
}