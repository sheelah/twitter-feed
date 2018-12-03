import React, { Component } from 'react';
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components/macro';
import styledNormalize from 'styled-normalize';
import Header from './Header';
import NotFound from './NotFound';
import Timeline from './Timeline';
import TimelineData from './TimelineData';
import variables from './base/variables';

const GlobalStyles = createGlobalStyle`
  ${styledNormalize} // Normalize

  html {
    font-size: 100%;
  }

  body {
    background: ${props => props.theme.lightestGray};
    color: ${props => props.theme.mediumGray};
    font-family: ${props => props.theme.fontFamily};
    font-size: 1rem;
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: normal;
    margin: 0;
  }

  img {
    height: auto;
    max-width: 100%;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={variables}>
          <>
            <GlobalStyles />
            <div className="App">
              <TimelineData>
                <Header />
                <Route
                  exact
                  path="/"
                  render={() => <Redirect to={{ pathname: '/jane_j' }} />}
                />
                <Switch>
                  <Route exact path="/jane_j" component={Timeline} />
                  <Route exact path="/john_g" component={Timeline} />
                  <Route component={NotFound} />
                </Switch>
              </TimelineData>
            </div>
          </>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
