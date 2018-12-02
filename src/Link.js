import React from 'react';
import styled from 'styled-components/macro';

const StyledLink = styled.a`
  color: ${props =>
    props.color ? props.theme[props.color] : props.theme.mediumGray};
  text-decoration: none;
`;

const Link = ({ children, href, color }) => (
  <StyledLink href={href} color={color}>
    {children}
  </StyledLink>
);

export default Link;
