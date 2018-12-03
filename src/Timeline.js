import React from 'react';
import styled from 'styled-components/macro';
import TimelineAside from './TimelineAside';
import TimelineTweets from './TimelineTweets';

const TimelineContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 400px 1fr;
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px 0;
`;

const Timeline = () => (
  <TimelineContainer>
    <TimelineAside />
    <TimelineTweets />
  </TimelineContainer>
);

export default Timeline;
