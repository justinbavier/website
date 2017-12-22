import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Post from './Post.js';
import Footer from './Footer.js';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <div className="All">
    <div className="Header">
      <Header />
    </div>
    <div className="Content">
      <Post title="News title" />
      <br />
      <Post title="Something else" />
    </div>
    <div className="Footer">
      <Footer />
    </div>
    </div>
    )
  }
}
