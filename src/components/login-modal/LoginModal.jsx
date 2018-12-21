import React, { Component } from 'react';

import { connect } from 'react-redux';
import { signIn } from '../../store/actions/auth';

import { Box, Layer, Heading, FormField, TextInput, Button, Text } from 'grommet';
import { Add, Close, FormClose, StatusGood, Trash } from "grommet-icons";

class LoginModal extends Component {

    state = {
      email: '',
      password: ''
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.signIn(this.state);
    }

    render() {
      console.log(this.props);
      return (
        <Box fill align="center" justify="center">
          {this.props.isOpen && (
            <Layer position="right" full="vertical" modal onClickOutside={() => {}} onEsc={() => {}}>
              <Box tag="form" fill="vertical" overflow="auto" width="medium" pad="medium" onSubmit={this.handleSubmit}>
                <Box flex={false} direction="row" justify="between">
                  <Heading level={2} margin="none">
                    Entre agora
                  </Heading>
                  <Button icon={<Close />} onClick={(e) => this.props.onClose(e)} />
                </Box>
                <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
                  <FormField label="Email">
                    <TextInput />
                  </FormField>
                  <FormField label="Senha">
                    <TextInput type="password"/>
                  </FormField>
                  {this.props.authError ?
                    <Text style={{color: '#f74d4d'}}>{this.props.authError}</Text> : null}
                </Box>
                <Box flex={false} tag="footer" align="start">
                  <Button type="submit" label="Enviar" onClick={() => {}} primary color="#33633e" />
                </Box>
              </Box>
            </Layer>
          )}
        </Box>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
