import React from 'react';
import moment from 'moment';
import styled from 'styled-components/macro';

const StyledTweet = styled.li`
  border-bottom: 1px solid ${props => props.theme.lightGray};
  list-style-type: none;
  padding: 20px;

  &:last-of-type {
    border: none;
  }

  img {
    border-radius: 10px;
    grid-column: 1 / 2;
    grid-row: 1 / -1;
  }

  .tweet {
    grid-column: 2 / 3;
    grid-row: 2;
  }

  .tweet-actions {
    align-self: center;
    display: inline-block;
    grid-column: 2 / 3;
    grid-row: 3;

    i {
      padding-right: 30px;
    }
  }

  .tweet-container {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 100px auto minmax(30px, auto);
    grid-template-rows: 20px auto 20px;
  }

  .tweet-date {
    margin-left: auto;
  }

  .user-name {
    color: ${props => props.theme.darkestGray};
    font-weight: 700;
    margin-right: 5px;
  }

  .screen-name,
  .tweet-actions,
  .tweet-date {
    color: ${props => props.theme.gray};
  }
`;

const Tweet = ({ tweet }) => {
  const timeFromNow = moment(
    tweet.created_at,
    'ddd MMM D HH:mm:ss ZZ YYYY'
  ).fromNow();

  return (
    <StyledTweet>
      <div className="tweet-container">
        <img src={tweet.user.profile_image_url_https} alt={tweet.user.name} />
        <div className="user-info">
          <span className="user-name">{tweet.user.name}</span>
          <span className="screen-name">@{tweet.user.screen_name}</span>
        </div>
        <span className="tweet-date">{timeFromNow}</span>
        <span className="tweet">{tweet.text}</span>
        <div className="tweet-actions">
          <i className="fas fa-undo" />
          <i className="fas fa-retweet" />
          <i className="fas fa-star" />
          <i className="fas fa-ellipsis-h" />
        </div>
      </div>
    </StyledTweet>
  );
};

export default Tweet;
