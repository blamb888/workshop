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
      backgroundImage: 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/29541bea-9f34-4505-98e3-220fb1a66afa/ddbynxg-7baf2ac6-c0b6-40c5-bec2-6102d37e3611.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMjk1NDFiZWEtOWYzNC00NTA1LTk4ZTMtMjIwZmIxYTY2YWZhXC9kZGJ5bnhnLTdiYWYyYWM2LWMwYjYtNDBjNS1iZWMyLTYxMDJkMzdlMzYxMS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.aHMmRcRk0tdik6o43A9i23nDr3IDRpSulrMdORKb5hw)'
    };
    const styleObj2 = {
      backgroundImage: 'url(https://wallpaperaccess.com/full/825441.jpg)'
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
