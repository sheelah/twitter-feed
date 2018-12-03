import React, { Component } from 'react';

export const TimelineContext = React.createContext({
  tweets: {},
  newTweet: '',
  handleAddTweets: () => {},
  handleAddTweet: () => {}
});

class TimelineData extends Component {
  handleAddTweet = this.handleAddTweet.bind(this);
  handleAddTweets = this.handleAddTweets.bind(this);

  handleAddTweet(username, tweet) {}

  handleAddTweets(username, tweets) {
    const existingTweets = this.state.tweets;

    const userTweets = existingTweets[username] || [];
    const newTweets = Array.from(new Set(userTweets.concat(tweets)));

    const allTweets = { ...this.state.tweets, [username]: newTweets };
    this.setState({ tweets: allTweets });
  }

  state = {
    tweets: {},
    newTweet: '',
    handleAddTweet: this.handleAddTweet,
    handleAddTweets: this.handleAddTweets
  };

  render() {
    return (
      <TimelineContext.Provider value={this.state}>
        {this.props.children}
      </TimelineContext.Provider>
    );
  }
}

export default TimelineData;
