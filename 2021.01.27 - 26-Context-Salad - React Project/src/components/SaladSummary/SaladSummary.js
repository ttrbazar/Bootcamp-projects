import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import SaladContext from '../../context/SaladContext';

const useStyles = createUseStyles({
    list: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        listStyle: "none",
        maxHeight: 50,
        '& li': {
            width: 200
        }
    },
    wrapper: {
        borderTop: 'black solid 1px',
        display: 'flex',
        padding: 25,
    }
});

export default function SaladSummary() {

    const { salad } = useContext(SaladContext);
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <h2>Your Salad</h2>
            <ul className={classes.list}>
                {salad.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
            </ul>
        </div>
    )
}