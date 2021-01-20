import React from 'react';
import { connect } from 'react-redux';
import { getChannel } from "../store/actions/";

let Channel = ({ channelName, channelString, getChannel }) => {

    const handleChannelOnClick = e => {
        e.preventDefault();
        getChannel(channelString);
    }

    return (
        <div className=" col-lg-2 col-md-4 col-sm-6 " onClick={handleChannelOnClick}>
            <div className="channel-button" style={{backgroundColor: "orange"}}>
                <p>{channelName}</p>
            </div>
        </div>
    )
}

// const mapStateToProps = state => state;

const mapDispatchToProps = { getChannel };

// Channel = connect(mapStateToProps, mapDispatchToProps)(Channel);
Channel = connect(null, mapDispatchToProps)(Channel);
export default Channel;