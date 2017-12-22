import React, { Component } from 'react';
import logo from './logo.svg';

class Post extends Component {
  render() {
    return (
      <h2>{this.props.title}</h2>
    )
  }
}

const postStyle = {
  backgroundColor: 'white',
  width: '25%',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  paddingTop: '.05rem'
}

export default Post;
