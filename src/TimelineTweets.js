import React, { Component } from 'react';
import styled from 'styled-components/macro';
import tweetData from './data/jane_j.json';
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
    tweets: tweetData
  };

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
