const names = ["Fatih", "Yusuf", "Yunus", "Ahmet"];
const messages = [
    <h2>Congragulations!</h2>,
    <h3>React is awesome</h3>];


class HelloMessage extends React.Component {
    render() {

        return (
            <div>
                <div>Hello from Component</div>
                <h1>Hello World</h1>
                {this.props.messages[0]}
                {this.props.messages[1]}
                <HelloNames names={names} />
            </div>
        )
    }
};


class HelloNames extends React.Component {

    static propTypes = {
        names: PropTypes.array
    }

    render() {
        return (
            <NoteList>
                {this.props.names.map((item, index) => <span key={index}>{item}</span>)}
            </NoteList>
        )
    }
}


class NoteList extends React.Component {
    render() {
        return (
            <ol>
                {React.Children.map(this.props.children, item => <li className={
                    item.key === "0"
                        ? "first"
                        : item.key === "1"
                            ? "second"
                            : item.key === "2"
                                ? "third"
                                : ""}>{item}</li>)}
            </ol>
        )
    }
}


function App() {
    return (
        <div>
            <h2>Hello from Function</h2>
            <HelloMessage messages={messages} />
        </div>
    );
}


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.querySelector("#example")
);
