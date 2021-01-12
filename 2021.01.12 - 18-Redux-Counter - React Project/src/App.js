import React from "react";
import { connect } from "react-redux";
import Counter from "./components/Counter";

function App(props) {
    return (
        <div>
            <Counter
                counter={props.counter}
                dispatchDecrement={props.dispatchDecrement}
                dispatchIncrement={props.dispatchIncrement}
                dispatchReset={props.dispatchReset}
            />
        </div>
    )
}

const mapStateToProps = ({ counter }) => ({counter});
const mapDispatchToProps = dispatch => ({
    dispatchIncrement: () => { dispatch({ type: "INCREMENT" }) },
    dispatchDecrement: () => { dispatch({ type: "DECREMENT" }) },
    dispatchReset: () => {dispatch({type: "RESET"})}
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
