/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Gif extends Component {
// eslint-disable-next-line react/prefer-stateless-function
  shouldComponentUpdate(nextProps) {
    const gifId = this.props;
    return nextProps.gifId !== gifId; // Don't call render if props.id did not change
  }

handleClick = () => {
  const { gifId, changeSelectGif } = this.props;
  changeSelectGif(gifId);
}

render() {
  const { gifId } = this.props;
  if (!gifId) {
    return null;
  }

  const url = `https://media.giphy.com/media/${gifId}/giphy.gif`;
  return (
    // eslint-disable-next-line react/prefer-stateless-function
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <img
      src={url}
      alt="gif"
      className="gif"
      onClick={this.handleClick}
    />
  );
}
}
