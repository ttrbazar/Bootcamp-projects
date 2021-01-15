import { Route, Switch, Link } from "react-router-dom"
import Message from "./Message";

const Messages = props => {
    // console.log(props.match);
    return (
        <div>
            <h1>This is my Messages page!</h1>
            <ul>
                <li key="1"><Link to="/messages/1">Message Number - 1</Link></li>
                <li key="2"><Link to="/messages/2">Message Number - 2</Link></li>
                <li key="3"><Link to="/messages/3">Message Number - 3</Link></li>
            </ul>
            <Switch>
                <Route exact path="/messages/:id" component={Message} />
                <Route path={props.match.url} render={() => (<h3>Select a message from above to display content.</h3>)}/>
            </Switch>
        </div>
    )
}

export default Messages;