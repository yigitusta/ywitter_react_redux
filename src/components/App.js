import React, { Component } from 'react';
import '../styles/App.css';
import Write from '../containers/Write';
import Tweets from '../containers/Tweets';

export default class App extends Component {
  render() {
    return (
      <div id="app" className="w3-container w3-theme-l3">
        <Write />
        <Tweets />
      </div>
    );
  }
}
