import React, { Component } from "react"
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from "../../util/Yelp";
import './App.css';

// const business = {
//     imageSrc: "./pizza.webp",
//     name: "MarginOtto Pizzeria",
//     address: "1010 Paddington Way",
//     city: "Flavortown",
//     state: "NY",
//     zipCode: "10101",
//     category: "Italian",
//     rating: 4.5,
//     reviewCount: 90
// }

// const businesses = [
//     business,
//     business,
//     business,
//     business,
//     business,
//     business,
// ];

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            businesses: []
        }
    }

    searchYelp = (term, location, sortBy) => {
        // console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
        Yelp.search(term, location, sortBy)
            .then(businesses => this.setState({ businesses }));
    }

    render() {
        return (
            <div className="App">
                <h1>Apollo Project</h1>
                <SearchBar searchYelp={this.searchYelp}></SearchBar>
                <BusinessList businesses={this.state.businesses}></BusinessList>
            </div>
        );
    }
}

export default App;