import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components/macro';
import styledNormalize from 'styled-normalize';
import Header from './Header';
import Timeline from './Timeline';
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
  }
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={variables}>
        <>
          <GlobalStyles />
          <div className="App">
            <Header />
            <Timeline />
          </div>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
