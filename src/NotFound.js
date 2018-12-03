import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 500px;
  min-height: 100vh;
`;

const NotFound = () => (
  <StyledNotFound>
    <h1>Ooops! That page doesn't exist.</h1>
    <p>
      Try going back <Link to="/">home</Link>, perhaps?
    </p>
  </StyledNotFound>
);

export default NotFound;
