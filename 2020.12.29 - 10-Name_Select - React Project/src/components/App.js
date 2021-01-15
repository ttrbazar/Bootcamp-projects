import React from 'react';
import { Select } from './Select';
import { Name } from './Name';

export class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Cornelius",
            message: ""
        }
    }

    changeName = (name, message) => this.setState({ name, message })

    render() {
        return (
            <div>
                <Select changeName={this.changeName} />
                <Name name={this.state.name} message={this.state.message} />
            </div>
        );
    }
}

