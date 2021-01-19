import React, { Component } from "react";
import { connect } from "react-redux";
import Picker from "../components/Picker";
import Posts from "../components/Posts";
import { fetchPosts, clearList } from "../actions/";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedSubreddit: "Please select an option"
        }
    }

    handleChange = subreddit => {
        this.setState({ selectedSubreddit: subreddit });
        if (subreddit === "select") {
            this.props.clearList();
        } else {
            this.props.fetchPosts(subreddit);
        }
    };

    handleRefresh = () => {
        this.props.fetchPosts(this.state.selectedSubreddit)
    }

    render() {

        const { lastUpdated, posts, isFetching } = this.props;
        const { selectedSubreddit } = this.state;

        // console.log("In APP => ", posts);

        return (
            <div>
                <Picker
                    value={selectedSubreddit}
                    isFetching={this.props.isFetching}
                    onChange={this.handleChange}
                    handleRefresh={this.handleRefresh}
                    options={[
                        "select",
                        "reactjs",
                        "frontend",
                        "javascript",
                        "reduxjs",
                        "backend",
                        "nodejs",
                        "mongodb",
                        "redux",
                        "undefined",
                    ]}
                />
                <p>
                    {lastUpdated && (
                        <span>
                            Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{" "}
                        </span>
                    )}
                </p>
                {isFetching
                    ? <h2>LOADING...</h2>
                    : (posts.length === 0)
                        ? <h2>No Results!</h2>
                        : (<Posts posts={posts} />)}
            </div>
        );
    }
}

const mapStateToProps = ({ posts, lastUpdated, isFetching }) => ({ posts, lastUpdated, isFetching });

const mapDispatchToProps = { fetchPosts, clearList };

export default connect(mapStateToProps, mapDispatchToProps)(App);