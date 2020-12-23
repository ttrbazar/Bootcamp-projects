import React from 'react';
import { Button } from './Button';

class ColorPicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: [55, 111, 55]
        };
        this.applyColor = this.applyColor.bind(this);
        this.chooseColor = this.chooseColor.bind(this);
    }

    componentDidMount() {
        console.log('i invoked immediately after component is mounted, just one time at the beginning; after render method')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('i invoked immediately after updating occurs, upon every change.');
        this.applyColor();
    }

    isLight(colorArr) {
        return colorArr.reduce((a, b) => a + b) > 127 * 3;  // it returns true or false;
    }

    formatColor(colorArr) {
        return 'rgb(' + colorArr.join(', ') + ')';   // it returns rgb format of color;
    }

    applyColor() {
        document.body.style.background = this.formatColor(this.state.color);
    }

    chooseColor() {
        const color = [];
        for (let i = 0; i < 3; i++) color.push(Math.floor(Math.random() * 256));
        this.setState({ color })
        // this.applyColor();
    }

    render() {
        // this.applyColor();
        return (
            <div>
                <h1 className={this.isLight(this.state.color) ? "black" : "white"}>
                    Your color is {this.formatColor(this.state.color)}!
                </h1>
                <Button chooseColor={this.chooseColor} isLight={this.isLight(this.state.color)}>
                    <p>Hi, im color picker</p>
                </Button>
            </div>
        );
    }
}

export default ColorPicker;
