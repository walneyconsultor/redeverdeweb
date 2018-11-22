import React, { Component } from 'react';

import Hero from './components/hero/index';
import ContentBox from './components/box';
// import MainContent from './components/'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Hero />
          <ContentBox>
            Blah blah
          </ContentBox>
        </header>
      </div>
    );
  }
}

export default App;
