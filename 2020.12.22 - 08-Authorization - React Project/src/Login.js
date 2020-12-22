import React from 'react';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            authorized: false,
            password: "",
            counter: 3,
            isEditing: true
        }
    }

    enableInput = () => {
        this.setState({ isEditing: true, counter: 3 });
    }

    authorize = event => {

        if (this.state.password === this.props.user.password) {
            this.setState({ authorized: true });
        } else {
            alert("Wrong password!");
        }

        this.setState({ counter: this.state.counter - 1, password: "" });

        if (this.state.counter === 0) {
            this.setState({ isEditing: false });
            setTimeout(this.enableInput, 6000);
        }
    }

    passwordOnChangeHandle = event => {
        this.setState({ password: event.target.value });
    }

    render() {

        const { name, mail, imgURL, phone } = this.props.user;

        let login = (
            <div className="card">
                <form className="form-inline" onSubmit={this.authorize} action='#'>
                    <div className="form-group">
                        <input
                            onChange={this.passwordOnChangeHandle}
                            value={this.state.password}
                            type="password"
                            className="form-control mx-sm-3"
                            placeholder="Password"
                            disabled={!this.state.isEditing}>
                        </input>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={!this.state.isEditing}>Submit
                        </button>
                    </div>
                </form>
            </div>
        );

        let contactCard = (
            <div className="card">
                <div className="top">
                    <h2>{name}</h2>
                    <div>
                        <img className="circle-img" src={imgURL}></img>
                    </div>
                </div>
                <div className="bottom">
                    <div>
                        <p className="info">{phone}</p>
                        <p className="info">{mail}</p>
                    </div>
                </div>
            </div>
        );

        return (
            <div id="authorization">
                <h1>Enter the Password</h1>
                {this.state.authorized ? contactCard : login}
            </div>
        )
    }
}

export default Login;