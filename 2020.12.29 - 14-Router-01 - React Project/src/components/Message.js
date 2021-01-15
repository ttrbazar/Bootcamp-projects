import React, {Component} from "react";

class Message extends Component {
    render() {
        // console.log(this.props.match);
        return (
            <div>
                <h3>This message comes from message ID: {this.props.match.params.id}</h3>
            </div>
        )
    }
}

export default Message;