import React, { Component } from "react";
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom"
import Video from "./Video";

export default class Menu extends Component {

    render() {
        return (
            < div >
                <Router>
                    <ul>
                        <li><NavLink to="/fast" exact>fast</NavLink></li>
                        <li><NavLink to="/slow" exact>slow</NavLink></li>
                        <li><NavLink to="/cute" exact>cute</NavLink></li>
                        <li><NavLink to="/eek" exact>eek</NavLink></li>
                    </ul>
                    <Switch>
                        <Route path="/:page" component={Video}></Route>
                    </Switch>
                </Router>
            </div >
        )
    }
}