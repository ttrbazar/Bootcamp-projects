import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../store/actions/";


let Button = ({selectedChannel, fetchPosts}) => {

    const handleButtonOnClick = e => {
        e.preventDefault();
        fetchPosts(selectedChannel);
    }
    
    return (
        <button
            className="btn btn-primary btn-lg btn-block"
            onClick={handleButtonOnClick}
        >
            Get top news
        </button>
    );
}

const mapStateToProps = ({ selectedChannel }) => ({ selectedChannel });

const mapDispatchToProps = { fetchPosts };

Button = connect(mapStateToProps, mapDispatchToProps)(Button);
export default Button;