import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { MainView, Heading, Textbox, Button } from '../../components/Common';
import { getNewControls } from '../../shared/utils';

class Signin extends Component {
  state = {
    disabled: true,
    controls: {
      email: {
        value: '',
        valid: false,
        touch: false,
        errMsg: '',
        validationRules: {
          isEmail: true,
          required: true,
          maxLength: 50
        }
      },
      password: {
        value: '',
        valid: false,
        touch: false,
        errMsg: '',
        validationRules: {
          required: true,
          maxLength: 50
        }
      }
    }
  };

  onPressHandler = () => {
    console.log('onPress');
  };

  onChangeTextHandler = (id, value) => {
    let newControls = { ...this.state.controls };
    newControls[id].value = value;
    newControls = getNewControls({ id, value, newControls });

    const { email, password } = newControls;
    const disabled =
      (!email.valid && email.touch) || (!password.valid && password.touch);
    this.setState({ controls: newControls, disabled });
  };

  render() {
    const { disabled } = this.state;
    const { email, password } = this.state.controls;
    const { container, controlWrapper, buttonWrapper } = styles;

    return (
      <MainView>
        <View style={container}>
          <View style={controlWrapper}>
            <Heading>SignIn</Heading>
            <Textbox
              value={email.value}
              control={email}
              placeholder="Email"
              onChangeText={value => this.onChangeTextHandler('email', value)}
            />
            <Textbox
              value={password.value}
              control={password}
              secureTextEntry
              placeholder="Password"
              onChangeText={value =>
                this.onChangeTextHandler('password', value)
              }
            />
            <View style={buttonWrapper}>
              <Button disabled={disabled} onPress={this.onPressHandler}>
                SignIn
              </Button>
            </View>
          </View>
        </View>
      </MainView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    alignItems: 'center'
  },
  controlWrapper: { width: '80%' },
  buttonWrapper: { alignItems: 'center' }
});

export default Signin;
