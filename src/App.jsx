import React, { Component } from 'react';

import Hero from './components/hero/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Hero />
        </header>
      </div>
    );
  }
}

export default App;
