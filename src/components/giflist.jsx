import React, { Component } from 'react';

import Gif from './gif';

// eslint-disable-next-line react/prefer-stateless-function
export default class GifList extends Component {
  render() {
    const { gifIdList, changeSelectGif } = this.props;
    return (
      <div className="gif-list">
        { gifIdList.map(
          (gifId) => {
            return (
              <Gif
                gifId={gifId}
                key={gifId}
                changeSelectGif={changeSelectGif}
              />
            );
          }
        )}
      </div>
    );
  }
}
