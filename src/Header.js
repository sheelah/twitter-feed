import React from 'react';
import styled from 'styled-components/macro';
import Nav from './Nav';
import NavActions from './NavActions';

const StyledHeader = styled.header`
  background-color: ${props => props.theme.blue};
  color: ${props => props.theme.white};
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
`;

const Header = () => (
  <StyledHeader>
    <Container>
      <Nav />
      <NavActions />
    </Container>
  </StyledHeader>
);

export default Header;
