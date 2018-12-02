import React from 'react';
import styled from 'styled-components/macro';
import NavLink from './NavLink';

const StyledNav = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
  }

  li {
    padding-right: 20px;
  }
`;

const Nav = () => (
  <StyledNav>
    <ul>
      <li>
        <NavLink href="/" isActive>
          <i className="fas fa-home" />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink href="/">
          <i className="fas fa-at" />
          Connect
        </NavLink>
      </li>
      <li>
        <NavLink href="/">
          <i className="fas fa-hashtag" />
          Discover
        </NavLink>
      </li>
      <li>
        <NavLink href="/">
          <i className="fas fa-user" />
          Me
        </NavLink>
      </li>
    </ul>
  </StyledNav>
);

export default Nav;
