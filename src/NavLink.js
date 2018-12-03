import React from 'react';
import styled from 'styled-components/macro';

const StyledNavLink = styled.a`
  color: ${props =>
    props.isActive ? props.theme.white : props.theme.offWhite};
  position: relative;
  text-decoration: none;

  i {
    font-size: 1.2rem;
    padding-right: 5px;
    vertical-align: text-bottom;
  }
`;

const NavLink = ({ children, href, ariaLabel, title, isActive = false }) => (
  <StyledNavLink
    href={href}
    isActive={isActive}
    aria-label={ariaLabel}
    title={title}
  >
    {children}
  </StyledNavLink>
);

export default NavLink;
