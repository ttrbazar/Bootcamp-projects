import React, { Component } from "react";

export default class Menu extends Component {

    formOnClickHandler = event => {
        console.log(event.target);
        this.props.chooseVideo(event.target.value);
    }

    render() {
        return (
            < div >
            <form onClick={this.formOnClickHandler}>
                <input id="fast" type="radio" value="fast" name="video-selector"/>
                <label for="fast">fast</label>
                <input id="slow" type="radio" value="slow" name="video-selector"/>
                <label for="slow">slow</label>
                <input id="cute" type="radio" value="cute" name="video-selector"/>
                <label for="cute">cute</label>
                <input id="eek" type="radio" value="eek" name="video-selector"/>
                <label for="eek">eek</label>
            </form>
            </div >
        )
    }
}