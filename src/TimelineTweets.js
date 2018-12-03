import React, { Component } from 'react';
import styled from 'styled-components/macro';
import Tweet from './Tweet';
import { TimelineContext } from './TimelineData';

const StyledTimelineTweets = styled.main`
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 8px;

  header {
    border-bottom: 1px solid ${props => props.theme.lightGray};
  }

  h1 {
    font-size: 1.4rem;
    padding: 8px 20px;
  }

  ul {
    padding: 0;
  }
`;

class TimelineTweets extends Component {
  static contextType = TimelineContext;
  fetchTweets = this.fetchTweets.bind(this);

  componentDidMount() {
    // Fetch JSON data
    // We can't do this sooner since the path is based on the URL.
    this.fetchTweets();
  }

  componentDidUpdate(prevProps) {
    // Reload tweets if username has changed
    if (prevProps.username !== this.props.username) {
      this.fetchTweets();
    }
  }

  fetchTweets() {
    const tweetData = require(`./data/${this.props.username}.json`);
    this.context.handleAddTweets(this.props.username, tweetData);
  }

  render() {
    const tweets = this.context.tweets;
    const userTweets = tweets[this.props.username] || [];

    if (!userTweets.length) return null;

    return (
      <StyledTimelineTweets>
        <header>
          <h1>Tweets</h1>
        </header>
        <ul>
          {userTweets.map(tweet => {
            return <Tweet key={tweet.id} tweet={tweet} />;
          })}
        </ul>
      </StyledTimelineTweets>
    );
  }
}

export default TimelineTweets;
