import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components/macro';
import styledNormalize from 'styled-normalize';
import Header from './Header';
import variables from './base/variables';

const GlobalStyles = createGlobalStyle`
  ${styledNormalize} // Normalize

  html {
    font-size: 100%;
  }

  body {
    font-family: ${props => props.theme.fontFamily};
    font-size: 1rem;
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
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
          </div>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
