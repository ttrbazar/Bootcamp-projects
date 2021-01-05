import React from 'react';
import ChoosePicture from './ChoosePicture';

var PICTUREPATHS = [
    'https://i.picsum.photos/id/111/200/300.jpg?hmac=bXXQTtXTex0m2Ogp23o7VFcNHAllTfE-8eSPYK2GeGM',
    'https://i.picsum.photos/id/776/200/300.jpg?hmac=BQHDuDGwB4rDL14FA6htzvzuvc0JcKn24gd4on7tp1M',
    'https://i.picsum.photos/id/953/200/300.jpg?hmac=8Bva5vDegltHxuHoyR882pbfhUI_t7iErL2SPtKrQRU',
    'https://i.picsum.photos/id/79/200/300.jpg?hmac=uqOMZrx9qlolrYp0xS5t84xjCiD_BIjfxIugTa1xjho'
];

class App extends React.Component {
    state = { currentPic: 0, setIntervalID: null, isPicChanging: false };

    nextPic = () => {
        let current = this.state.currentPic;
        let next = ++current % PICTUREPATHS.length;
        this.setState({ currentPic: next });
    }

    handleOnButtonClick = () => {
        if (this.state.isPicChanging) {
            clearInterval(this.state.setIntervalID);
        } else {
            const setIntervalID = setInterval(this.nextPic, 500);
            this.setState({ setIntervalID });
        }
        this.setState({ isPicChanging: !this.state.isPicChanging });
    }

    render() {
        // console.log(this.state);
        let src = PICTUREPATHS[this.state.currentPic];
        return (
            <div>
                <ChoosePicture
                    src={src}
                    handleOnButtonClick={this.handleOnButtonClick}
                    isPicChanging={this.state.isPicChanging}
                ></ChoosePicture>
            </div>
        );
    }
}

export default App;