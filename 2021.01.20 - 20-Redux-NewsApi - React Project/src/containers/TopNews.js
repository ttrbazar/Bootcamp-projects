import React from "react";
import { connect } from "react-redux";
import NewsItem from "../components/NewsItem";

let TopNews = ({ articles, loading }) => {
    let topNews = "";
    if (articles) {
        topNews = articles.map((article, index) => (
            <div key={`${index}`} className="card">
                <NewsItem article={article} />
            </div>
        ));
    }
    if (loading) {
        topNews = <h3 className="loading-indicator">Loading ...</h3>;
    }
    return <div>{topNews}</div>;
};

const mapStateToProps = ({articles, loading}) => ({
    articles,
    loading
});

TopNews = connect(mapStateToProps, null)(TopNews);
export default TopNews;