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

  span > i {
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
  <StyledNavActions>
    <span>
      <i className="fab fa-twitter" />
    </span>
    <Form>
      <input type="text" placeholder="Search" />
    </Form>
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
