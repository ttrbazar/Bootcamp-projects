import React from "react";
import { connect } from "react-redux";

function App(props) {
    return (
        <div className="App">
            <h1>REDUX ARTİCLELİST SEARCH APP</h1>
            <Search onSearch={props.onSearch}></Search>
            <Articles articles={props.articles} searchTerm={props.searchTerm}></Articles>
        </div>
    );
}

function Search(props) {
    const handleOnChange = e => {
        // console.log(e.target.value);
        props.onSearch(e.target.value);
    }

    return (
        <div>
            <input type="text" onChange={handleOnChange} />
        </div>
    )
}

function Articles(props) {
    const { articles, searchTerm } = props;
    // console.log(searchTerm);
    return (
        <ul>
            {
                articles
                    .filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map(article => <li key={article.id}><a href={article.url}>{article.title}</a></li>)
            }
        </ul>
    )
}


const mapStateToProps = state => ({
    articles: state.articlesState.articles,
    searchTerm: state.searchState.searchTerm,
});


const mapDispatchToProps = dispatch => ({
    onSearch: searchTerm => dispatch({ type: 'SEARCH_SET', searchTerm }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);