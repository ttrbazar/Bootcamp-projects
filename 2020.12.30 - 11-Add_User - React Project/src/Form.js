import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            job: ''
        };
    }

    inputOnChangeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmitHandler = event => {
        event.preventDefault();
        this.props.updateNames({...this.state});
        this.setState({name: "", job: ""});
    }

    render() {
        const { name, job } = this.state;
        return (
            <form onSubmit={this.onSubmitHandler}>
                <h2>Name: {this.state.name}. Job: {this.state.job}</h2>
                <label htmlFor="name">Name</label>
                <input
                    onChange={this.inputOnChangeHandler}
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                />
                <label htmlFor="job">Job</label>
                <input
                    onChange={this.inputOnChangeHandler}
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
