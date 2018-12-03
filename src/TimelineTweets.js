import React, { Component } from 'react';
import styled from 'styled-components/macro';
import Tweet from './Tweet';

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
  state = {
    tweets: []
  };

  componentDidMount() {
    // Fetch JSON data
    // We can't do this sooner since the path is based on the URL.
    const tweetData = require(`./data/${this.props.username}.json`);
    this.setState({ tweets: tweetData });
  }

  render() {
    const { tweets } = this.state;

    return (
      <StyledTimelineTweets>
        <header>
          <h1>Tweets</h1>
        </header>
        <ul>
          {tweets.map(tweet => {
            return <Tweet key={tweet.id} tweet={tweet} />;
          })}
        </ul>
      </StyledTimelineTweets>
    );
  }
}

export default TimelineTweets;
