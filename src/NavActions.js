import React from 'react';
import styled from 'styled-components/macro';

const StyledNavActions = styled.div`
  display: flex;

  > * {
    padding-right: 20px;
  }
`;

const NavActions = () => (
  <StyledNavActions>
    <span>Twitter</span>
    <form>
      <input type="text" placeholder="Search" />
    </form>
    <a href="#">Messages</a>
    <a href="#">Settings</a>
    <a href="#">Compose Tweet</a>
  </StyledNavActions>
);

export default NavActions;
