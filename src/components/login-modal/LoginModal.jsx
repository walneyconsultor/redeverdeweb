import React, { Component } from 'react';

import { Box, Layer, Heading, FormField, TextInput, Button } from 'grommet';
import { Add, Close, FormClose, StatusGood, Trash } from "grommet-icons";

const LoginModal = ({ isOpen, onClose }) => {
    return (
        <Box fill align="center" justify="center">
          {isOpen && (
            <Layer
              position="right"
              full="vertical"
              modal
              onClickOutside={() => {}}
              onEsc={() => {}}
            >
              <Box
                tag="form"
                fill="vertical"
                overflow="auto"
                width="medium"
                pad="medium"
                onSubmit={() => {}}
              >
                <Box flex={false} direction="row" justify="between">
                  <Heading level={2} margin="none">
                    Entre agora
                  </Heading>
                  <Button icon={<Close />} onClick={(e) => onClose(e)} />
                </Box>
                <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
                  <FormField label="Email">
                    <TextInput />
                  </FormField>
                  <FormField label="Senha">
                    <TextInput type="password"/>
                  </FormField>
                </Box>
                <Box flex={false} tag="footer" align="start">
                  <Button
                    type="submit"
                    label="Enviar"
                    onClick={() => {}}
                    primary
                    color="#33633e"
                  />
                </Box>
              </Box>
            </Layer>
          )}
        </Box>
    )
}

export default LoginModal;
