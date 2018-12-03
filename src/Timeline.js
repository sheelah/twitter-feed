import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import TimelineAside from './TimelineAside';
import TimelineTweets from './TimelineTweets';

const TimelineContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 350px 1fr 100px;
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px 0;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.blue};
  transition: all 0.3s;

  &:hover,
  &:active {
    text-decoration: none;
  }
`;

const Timeline = ({ match }) => {
  const username = match.url.split('/')[1];
  const nextUser = username === 'jane_j' ? 'john_g' : 'jane_j';

  return (
    <TimelineContainer>
      <TimelineAside username={username} />
      <TimelineTweets username={username} />
      <div>
        <StyledLink to={`/${nextUser}`}>Next user</StyledLink>
      </div>
    </TimelineContainer>
  );
};

export default Timeline;
