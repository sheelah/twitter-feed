import React from 'react';
import styled from 'styled-components/macro';
import Jane from './images/jane.jpg';

const StyledTimelineAside = styled.aside`
  .user-profile {
    border: 1px solid ${props => props.theme.lightGray};
    border-top: 1px solid transparent;
    border-radius: 10px;
    overflow: hidden;

    img {
      display: block;
    }
  }

  .user-stats {
    background-color: ${props => props.theme.white};
    border-bottom: 1px solid ${props => props.theme.lightGray};
    display: flex;
    justify-content: space-around;
  }

  .stat {
    border-right: 1px solid ${props => props.theme.lightGray};
    flex: 1 0 100px;
    padding: 10px;

    &:last-of-type {
      border-right: none;
    }

    h4 {
      font-size: 0.8rem;
      line-height: 1.4;
      text-transform: uppercase;
    }

    span {
      color: ${props => props.theme.darkGray};
      font-weight: 700;
    }
  }

  .compose-tweet {
    padding: 10px 20px;

    input[type='text'] {
      border: 1px solid ${props => props.theme.lightGray};
      color: inherit;
      display: block;
      margin: 0 auto;
      padding: 5px 10px;
      width: 90%;
    }
  }
`;

const TimelineAside = () => (
  <StyledTimelineAside>
    <div className="user-profile">
      <img src={Jane} alt="" />
      <div className="user-stats">
        <div className="stat">
          <h4>Tweets</h4>
          <span>304</span>
        </div>
        <div className="stat">
          <h4>Following</h4>
          <span>102</span>
        </div>
        <div className="stat">
          <h4>Followers</h4>
          <span>11.6K</span>
        </div>
      </div>
      <form className="compose-tweet">
        <input type="text" placeholder="Compose new Tweet..." />
      </form>
    </div>
  </StyledTimelineAside>
);

export default TimelineAside;
