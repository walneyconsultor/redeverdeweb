import React, { Component } from 'react';

import { WorldMap, Grid, Box, Text } from 'grommet';

import { all } from 'rsvp';

import Hero from './components/hero/index';
import BigText from './components/big-text';
import ContentBox from './components/box';

import LoginModal from './components/login-modal';

class App extends Component {

  state = {
    loginFormOpen: false,
    registerFormOpen: false
  };

  toggleLoginForm = (e) => {
    e.preventDefault();
    this.setState({ loginFormOpen: !this.state.loginFormOpen });
  }

  render() {

    return (
      <div className="App">

        <header className="App-header">
          <Hero
            firstButtonClick={() => {}}
            secondButtonClick={this.toggleLoginForm}
          />
        </header>

        <ContentBox color="#33633e">
          <BigText>
            Bem vindo ao aplicativo Rede Verde 🍂
          </BigText>
        </ContentBox>

        <LoginModal
            onClose={this.toggleLoginForm}
            isOpen={this.state.loginFormOpen} />

      </div>
    );
  }
}

export default App;
