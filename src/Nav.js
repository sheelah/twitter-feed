import React from 'react';
import styled from 'styled-components/macro';

const StyledNav = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
  }

  li {
    padding-right: 20px;
  }
`;

const Nav = () => (
  <StyledNav>
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Connect</a>
      </li>
      <li>
        <a href="#">Discover</a>
      </li>
      <li>
        <a href="#">Me</a>
      </li>
    </ul>
  </StyledNav>
);

export default Nav;
