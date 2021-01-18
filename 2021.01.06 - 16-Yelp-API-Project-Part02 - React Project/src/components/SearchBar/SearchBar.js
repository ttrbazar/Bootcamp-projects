import React, { Component } from "react";
import "./SearchBar.css";



class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: "",
            location: "",
            sortBy: "best_match"
        };
        this.sortByOptions = {
            "Best Match": "best_match",
            "Highest Rated": "rating",
            "Most Reviewed": "review_count"
        };
    }

    getSortByClass = sortByOption => {
        if (this.state.sortBy === sortByOption) {
            return "active";
        } else {
            return "";
        }
    }

    handleSortByChange = sortByOption => {
        this.setState({ sortBy: sortByOption });
    }

    handleTermChange = event => {
        // console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    handleLocationChange = event => {
        // console.log(event.target.value);
        this.setState({ location: event.target.value });
    }

    handleSearch = event => {
        event.preventDefault();
        const {term, location, sortBy} = this.state;
        this.props.searchYelp(term, location, sortBy);
        this.setState({term: "", location: ""});
    }

    renderSortByOptions = () => {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            const sortByOptionValue = this.sortByOptions[sortByOption];
            return (
                <li
                    key={sortByOptionValue}
                    className={this.getSortByClass(sortByOptionValue)}
                    onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
                >{sortByOption}</li>
            )
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input
                        onChange={this.handleTermChange}
                        value={this.state.term}
                        placeholder="Search Businesses"
                    />
                    <input
                        onChange={this.handleLocationChange}
                        value={this.state.location}
                        placeholder="Where?"
                    />
                </div>
                <div className="SearchBar-submit" onClick={this.handleSearch}>
                    <a href='www.#.com' >Let's Go</a>
                </div>
            </div>

        )
    }
}

export default SearchBar;