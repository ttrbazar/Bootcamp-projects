import React from "react"
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Apollo Project</h1>
            <SearchBar></SearchBar>
            <BusinessList></BusinessList>
        </div>
    );
}

export default App;