import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteTweet } from '../actions/index';
import '../styles/Tweet.css';

class Tweet extends Component {
  render() {
    return (
      <li className="tweet w3-panel w3-bottombar w3-border-blue w3-left-align">
        <div className="id">
          <h5 className="w3-text-theme">ID: </h5>
          {this.props.ID}
        </div>
        <div className="content">
          {this.props.content}
        </div>
        <button className="w3-red w3-btn" onClick={() => this.props.deleteTweet(this.props.index)}>Delete</button>
      </li>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ deleteTweet }, dispatch);
}

export default connect(null, matchDispatchToProps)(Tweet);
