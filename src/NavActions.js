import React from 'react';
import styled from 'styled-components/macro';
import NavLink from './NavLink';

const StyledNavActions = styled.div`
  align-items: center;
  display: flex;

  > * {
    padding-right: 20px;
  }

  span > i {
    padding-right: 5px;
  }
`;

const NavActions = () => (
  <StyledNavActions>
    <span>
      <i className="fab fa-twitter" />
    </span>
    <form>
      <input type="text" placeholder="Search" />
    </form>
    <NavLink href="/">
      <i className="fas fa-envelope" />
      Messages
    </NavLink>
    <NavLink href="/">
      <i className="fas fa-cog" />
      Settings
    </NavLink>
    <NavLink href="/">
      <i className="far fa-plus-square" />
      Compose Tweet
    </NavLink>
  </StyledNavActions>
);

export default NavActions;
