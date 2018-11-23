import React, { Component } from 'react';

import Hero from './components/hero/index';
import ContentBox from './components/box';
import BigText from './components/bigText';
import { WorldMap, Grid } from 'grommet';
class App extends Component {

  state = {};

  onSelectPlace = place => {
    this.setState({ places: [{ color: "white", location: place }] });
  };

  render() {
    const { places } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Hero/>
        
          <ContentBox color="#6ec983">
            <WorldMap
              onSelectPlace={this.onSelectPlace} 
              alignSelf="center"
              places={places} />
          </ContentBox>

          <ContentBox color="#33633e">
            <BigText>
              Bem vindo ao aplicativo Rede Verde 🍂
            </BigText>
          </ContentBox>

          <ContentBox color="gray">
            <BigText>aqui vai o grid</BigText>
          </ContentBox>

        </header>
      </div>
    );
  }
}

export default App;
