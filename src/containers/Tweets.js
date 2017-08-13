import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from './Tweet';

class Tweets extends Component {
  constructor(props) {
    super(props);

    this.eachTweet = this.eachTweet.bind(this);
  }

  eachTweet(tweet, i) {
    return <Tweet key={tweet.id} index={i} ID={tweet.id} content={tweet.content} />;
  }

  render() {
    return (
      <div className="w3-panel w3-theme-l4 w3-center">
        <h1 className="w3-theme-l1">Tweets</h1>
        <ul className="w3-ul">
          {this.props.tweets.map(this.eachTweet)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets,
  };
}

export default connect(mapStateToProps)(Tweets);
