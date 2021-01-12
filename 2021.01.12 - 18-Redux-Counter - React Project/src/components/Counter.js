import React, { useState } from "react";

function Counter(props) {

    const [setIntervalId, setSetIntervalId] = useState(null);

    const handleOnClickDecrement = e => { props.dispatchDecrement() };
    const handleOnClickIncrement = e => { props.dispatchIncrement() };
    const handleOnClickIncrementIfOdd = e => {
        if (props.counter % 2 === 1) { props.dispatchIncrement() };
    };
    const handleOnClickIncrementWithTimeDelay = e => {
        setTimeout(() => {
            props.dispatchIncrement();
        }, 2000);
    };
    const handleOnClickIncrementWithTimeIntervals = e => {
        if (setIntervalId) {
            clearInterval(setIntervalId);
            setSetIntervalId(null);
        } else {
            const setIntervalIdTemp = setInterval(() => {
                props.dispatchIncrement();
            }, 100);
            setSetIntervalId(setIntervalIdTemp);
        }
    }

    const handleOnClickResetCounter = e => {
        if (setIntervalId) {clearInterval(setIntervalId);};
        setSetIntervalId(null);
        props.dispatchReset();
    }

    return (
        <div className="container">
            <h1>Counter</h1>
            <h1>{props.counter}</h1>
            <button onClick={handleOnClickDecrement}>Decrement</button>
            <button onClick={handleOnClickIncrement}>Increment</button>
            <br />
            <button onClick={handleOnClickIncrementIfOdd}>Increment if ODD</button>
            <br />
            <button onClick={handleOnClickIncrementWithTimeDelay}>Increment with time delay</button>
            <br />
            <button onClick={handleOnClickIncrementWithTimeIntervals}>{setIntervalId ? "Stop Timer" : "Increment with time intervals"}</button>
            <br/>
            <button onClick={handleOnClickResetCounter}>RESET COUNTER</button>
        </div>
    )
}

export default Counter;