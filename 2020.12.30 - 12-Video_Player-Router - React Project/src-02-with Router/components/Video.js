import React, { Component } from "react";

const VIDEOS = {
    fast: 'https://cdn.videvo.net/videvo_files/video/free/2015-04/small_watermarked/Equestrian_04_Videvo_preview.webm',
    slow: 'https://cdn.videvo.net/videvo_files/video/free/2019-11/small_watermarked/190301_1_25_11_preview.webm',
    cute: 'https://cdn.videvo.net/videvo_files/video/free/2016-03/small_watermarked/gatos__preview.webm',
    eek: 'https://cdn.videvo.net/videvo_files/video/free/2014-04/small_watermarked/Albino_Snake_CCBY_NatureClip_preview.webm'
};

export default class Video extends Component {
    render() {
        console.log(this.props);
        const videoSelection = this.props.match.params.page;
        const src = (videoSelection === "fast"
            ? VIDEOS.fast
            : videoSelection === "slow"
                ? VIDEOS.slow
                : videoSelection === "cute"
                    ? VIDEOS.cute
                    : videoSelection === "eek"
                        ? VIDEOS.eek
                        : prompt("Choose one from: 'fast', 'slow', 'cute', 'eek'"));
        return (
            < div >
                <video src={src} controls></video>
            </div >
        )
    }
}