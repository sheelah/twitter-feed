import React, { Component } from 'react';
import moment from 'moment';

export const TimelineContext = React.createContext({
  tweets: {},
  newTweet: '',
  handleAddTweets: () => {},
  handleAddTweet: () => {},
  handleTweetInput: () => {},
  resetTweetForm: () => {}
});

class TimelineData extends Component {
  handleAddTweet = this.handleAddTweet.bind(this);
  handleAddTweets = this.handleAddTweets.bind(this);
  handleTweetInput = this.handleTweetInput.bind(this);
  resetTweetForm = this.resetTweetForm.bind(this);

  handleAddTweet(username, tweet) {
    const userTweets = this.state.tweets[username] || [];
    const newTweet = {
      created_at: moment().format('ddd MMM D HH:mm:ss ZZ YYYY'),
      id: moment().toString(), // We need a random string for uniqueness
      text: tweet,
      user: {
        name: userTweets[0].user.name || 'Jane Bot',
        screen_name: username,
        profile_image_url_https: `/images/${username}-thumb.jpg`
      }
    };

    // Add the new tweet to the front of the array
    const allUserTweets = [newTweet].concat(userTweets);
    const tweets = { ...this.state.tweets, [username]: allUserTweets };
    this.setState({ tweets });
  }

  handleAddTweets(username, tweets) {
    const existingTweets = this.state.tweets;

    const userTweets = existingTweets[username] || [];
    const newTweets = Array.from(new Set(userTweets.concat(tweets)));

    const allTweets = { ...this.state.tweets, [username]: newTweets };
    this.setState({ tweets: allTweets });
  }

  handleTweetInput(e) {
    this.setState({ newTweet: e.target.value });
  }

  resetTweetForm() {
    this.setState({ newTweet: '' });
  }

  state = {
    tweets: {},
    newTweet: '',
    handleAddTweet: this.handleAddTweet,
    handleAddTweets: this.handleAddTweets,
    handleTweetInput: this.handleTweetInput,
    resetTweetForm: this.resetTweetForm
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
