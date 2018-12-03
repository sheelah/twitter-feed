import React from 'react';
import styled from 'styled-components/macro';
import NavLink from './NavLink';

const StyledNavActions = styled.div`
  align-items: center;
  display: flex;
  font-size: 0.9rem;

  > * {
    padding-right: 20px;
  }
`;

const TwitterLogo = styled.span`
  > i {
    padding-right: 5px;
    font-size: 1.2rem;
  }
`;

const Form = styled.form`
  color: ${props => props.theme.offWhite};
  position: relative;

  &:after {
    content: '\f002';
    font-family: 'FontAwesome';
    font-size: 0.8rem;
    position: absolute;
    right: 30px;
    transform: translateY(50%);
  }

  input[type='text'] {
    background-color: #1f85c7;
    border: none;
    border-radius: 20px;
    color: inherit;
    max-width: 150px;
    padding: 5px 10px;
    position: relative;

    &::placeholder {
      color: inherit;
    }
  }
`;

const NavActions = () => (
  <>
    <TwitterLogo>
      <i className="fab fa-twitter" />
    </TwitterLogo>
    <StyledNavActions>
      <Form>
        <input type="text" placeholder="Search" />
      </Form>
      <NavLink href="/" ariaLabel="View messages" title="View messages">
        <i aria-hidden className="fas fa-envelope" />
      </NavLink>
      <NavLink href="/" ariaLabel="View settings" title="View settings">
        <i aria-hidden className="fas fa-cog" />
      </NavLink>
      <NavLink href="/" ariaLabel="Compose a tweet" title="Compose a tweet">
        <i aria-hidden className="far fa-plus-square" />
      </NavLink>
    </StyledNavActions>
  </>
);

export default NavActions;
