import React, { useState } from 'react';

const Form = props => {

    const [inputText, setInputText] = useState("");

    const handleOnChange = e => {
        setInputText(e.target.value);
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        props.handleData(inputText);
        setInputText("");
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input
                    type="text"
                    value={inputText}
                    onChange={handleOnChange}
                    disabled={props.isLoading}
                />
                <button disabled={props.isLoading}>Search</button>
            </form>
        </div>
    )
}

export default Form;