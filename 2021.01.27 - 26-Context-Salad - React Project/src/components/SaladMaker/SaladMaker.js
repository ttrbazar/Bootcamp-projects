import React, { useReducer } from 'react';
import { createUseStyles } from 'react-jss';
import SaladContext from '../../context/SaladContext';
import SaladBuilder from "../SaladBuilder/SaladBuilder";
import SaladSummary from "../SaladSummary/SaladSummary";

const useStyles = createUseStyles({
    wrapper: {
        textAlign: 'center',
    }
});

const reducer = (state, item) => [...state, item];

export default function SaladMaker() {
    const classes = useStyles();
    const [salad, setSalad] = useReducer(reducer, []);
    return (
        <SaladContext.Provider value={{ salad, setSalad }}>
            <h1 className={classes.wrapper}>
                <SaladBuilder />
                <SaladSummary />
                <span role="img" aria-label="salad">🥗 </span>
                Build Your Custom Salad!
                <span role="img" aria-label="salad"> 🥗</span>
            </h1>
        </SaladContext.Provider>
    )
}