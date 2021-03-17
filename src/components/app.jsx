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
      gifIdList: ["T9JPznkGDAxYC8m7yC", "2A4B1DpUJxSAHhc6cG", "fe4695iudYhnGAiIia"],
      gifIdSelected: "DAGAgaS8sIZmjpnihn"
    };
    this.fetchGiphy("stranger things");
  }

  fetchGiphy = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({ gifIdList: res.data.map(gif => gif.id) });
    });
  }

  changeSelectGif = (newSelectedGifId) => {
    this.setState({ gifIdSelected: newSelectedGifId });
  }

  render() {
    const { gifIdSelected, gifIdList } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar fetchGiphy={this.fetchGiphy} />
          <div className="selected-gif">
            <Gif gifId={gifIdSelected} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifIdList={gifIdList} changeSelectGif={this.changeSelectGif} />
        </div>
      </div>
    );
  }
}

export default App;
