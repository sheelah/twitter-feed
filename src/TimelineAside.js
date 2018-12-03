import React, { Component } from 'react';
import styled from 'styled-components/macro';
import Link from './Link';
import { TimelineContext } from './TimelineData';

const UserProfile = styled.div`
  border: 1px solid ${props => props.theme.lightGray};
  border-top: 1px solid transparent;
  border-radius: 8px;
  margin-bottom: 20px;
  overflow: hidden;

  img {
    display: block;
  }
`;

const UserStats = styled.div`
  background-color: ${props => props.theme.white};
  border-bottom: 1px solid ${props => props.theme.lightGray};
  display: flex;
  justify-content: space-around;

  .stat {
    border-right: 1px solid ${props => props.theme.lightGray};
    flex: 1 0 70px;
    padding: 10px 20px;

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
`;

const ComposeTweetForm = styled.form`
  padding: 10px 20px;

  input[type='text'] {
    border: 1px solid ${props => props.theme.lightGray};
    border-radius: 3px;
    color: inherit;
    display: block;
    margin: 0 auto;
    padding: 5px 10px;
    width: 90%;

    &::placeholder {
      color: inherit;
    }
  }
`;

const AsideSection = styled.div`
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 30px 20px;

  h2 {
    margin-bottom: 10px;
  }

  a {
    display: ${props => (props.inline ? 'inline-block' : 'block')};
    line-height: 1.6;
    padding-left: 5px;

    a:last-of-type {
      padding-left: ${props => props.inline && 0};
    }
  }
`;

class TimelineAside extends Component {
  static contextType = TimelineContext;
  handleFormSubmit = this.handleFormSubmit.bind(this);

  handleFormSubmit(e) {
    e.preventDefault();

    const { handleAddTweet, resetTweetForm } = this.context;
    handleAddTweet(this.props.username, this.context.newTweet);

    // Clear input field
    resetTweetForm();
  }

  render() {
    const { username } = this.props;
    const { newTweet, handleTweetInput } = this.context;

    return (
      <aside>
        <UserProfile>
          <img src={require(`./images/${username}.jpg`)} alt="" />
          <UserStats>
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
          </UserStats>
          <ComposeTweetForm onSubmit={this.handleFormSubmit}>
            <input
              type="text"
              placeholder="Compose new Tweet..."
              value={newTweet}
              onChange={handleTweetInput}
            />
          </ComposeTweetForm>
        </UserProfile>
        <AsideSection block>
          <h2>Trends</h2>
          <Link href="/" color="blue">
            #Thankful
          </Link>
          <Link href="/" color="blue">
            #Thanksgiving
          </Link>
          <Link href="/" color="blue">
            Disney
          </Link>
          <Link href="/" color="blue">
            #Thankful
          </Link>
          <Link href="/" color="blue">
            #SerenaWilliams
          </Link>
          <Link href="/" color="blue">
            #Holidays
          </Link>
        </AsideSection>
        <AsideSection inline>
          <span>{`\u00A9 ${new Date().getFullYear()} Twitter`}</span>
          <Link href="/">About</Link>
          <Link href="/">Help</Link>
          <Link href="/">Terms</Link>
          <Link href="/">Privacy</Link>
          <Link href="/">Cookies</Link>
          <Link href="/">Press</Link>
        </AsideSection>
      </aside>
    );
  }
}

export default TimelineAside;
