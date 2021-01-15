import React from 'react';
import { names } from "./names";
import { wishes } from "./wishes";

export class Select extends React.Component {

    handleChange = e => this.props.changeName(e.target.value, wishes[Math.floor(Math.random() * wishes.length)].replace(/^\d+\.\s/, ""))

    render() {
        return (
            <div>
                <h1>Pickup a name :</h1>
                <select id="great-names" onChange={this.handleChange}>
                    {names.map((name, index) => (<option key={index} value={name}>{name}</option>))}
                </select>
            </div>
        );
    }
}