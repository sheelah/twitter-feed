import React from 'react';
import styled from 'styled-components/macro';

const StyledNavLink = styled.a`
  color: ${props =>
    props.isActive ? props.theme.white : props.theme.offWhite};
  text-decoration: none;

  i {
    padding-right: 5px;
  }
`;

const NavLink = ({ children, href, isActive = false }) => (
  <StyledNavLink href={href} isActive={isActive}>
    {children}
  </StyledNavLink>
);

export default NavLink;
