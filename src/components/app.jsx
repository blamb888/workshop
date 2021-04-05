import React, { Component } from 'react';

import SearchBar from './searchBar';
import GifList from './giflist';
import Gif from './gif';

const giphy = require('giphy-api')({
  apiKey: 'KkL8LiLukkK8FADVuxtiFUpiLolcctkP',
  https: true
});

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifIdList: [],
      gifIdSelected: "9Pk3Y2QCF1fR7TyXqZ"
    };
    this.fetchGiphy("stranger things");
  }

  fetchGiphy = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({ gifIdList: res.data.map((gif) => gif.id) });
    });
  }

  changeSelectGif = (newSelectedGifId) => {
    this.setState({ gifIdSelected: newSelectedGifId });
  }

  render() {
    const { gifIdSelected, gifIdList } = this.state;
    const styleObj = {
      backgroundImage: 'url(./images/background-large.png)'
    };
    const styleObj2 = {
      backgroundImage: 'url(./images/right-side2.jpg)'
    };
    return (
      <div>
        <div className="left-scene">
          <SearchBar fetchGiphy={this.fetchGiphy} />
          <div className="selected-gif" style={styleObj}>
            <Gif gifId={gifIdSelected} />
          </div>
        </div>
        <div className="right-scene" style={styleObj2}>
          <GifList gifIdList={gifIdList} changeSelectGif={this.changeSelectGif} />
        </div>
      </div>
    );
  }
}

export default App;
