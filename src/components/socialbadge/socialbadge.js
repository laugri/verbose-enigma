// @flow

import React, { Component } from 'react';
import './socialbadge.css';

type Props = {};

function randomColor() {
  const colors = ['blue', 'green', 'red'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function randomLetter() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

class SocialBadge extends Component<Props> {
  render() {
    return (
      <div className={`SocialBadge SocialBadge--${randomColor()}`}>
        {randomLetter()}
      </div>
    );
  }
}

export default SocialBadge;
