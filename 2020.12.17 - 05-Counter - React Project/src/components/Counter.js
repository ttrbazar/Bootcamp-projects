import React, { Component } from "react";

export default class Counter extends Component {
    state = { count: 0 }

    increase = () => this.setState({count: this.state.count + 1})

    render() {
        return (
            <div className="card">
                <h1>{this.state.count}</h1>
                <button onClick={this.increase}>+</button>
            </div>
        )
    }
}