import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import {
  MainView,
  Heading,
  Textbox,
  Button,
  Spinner,
  Icons
} from '../../components/Common';
import { getNewControls } from '../../shared/utils';
import { doLogin } from '../../store/actions';

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

  componentDidMount = () => {};

  onPressHandler = () => {
    const { email, password } = this.state.controls;
    this.props.doLogin({ email: email.value, password: password.value });
  };

  onChangeTextHandler = (id, value) => {
    let newControls = { ...this.state.controls };
    newControls[id].value = value;
    newControls = getNewControls({ id, value, newControls });

    const { email, password } = newControls;
    const disabled = !email.valid || !password.valid;
    this.setState({ controls: newControls, disabled });
  };

  renderButton = () => {
    const { disabled } = this.state;
    const { loading } = this.props;

    if (loading) return <Spinner />;

    return (
      <Button disabled={disabled} onPress={this.onPressHandler}>
        SignIn
      </Button>
    );
  };

  render() {
    const { email, password } = this.state.controls;
    const { container, controlWrapper, buttonWrapper, inputWrapper } = styles;

    return (
      <MainView>
        <View style={container}>
          <View style={controlWrapper}>
            <Heading>SignIn</Heading>
            <View style={inputWrapper}>
              <Icons name="user" />
              <Textbox
                value={email.value}
                control={email}
                placeholder="Email"
                onChangeText={value => this.onChangeTextHandler('email', value)}
              />
            </View>
            <View style={inputWrapper}>
              <Icons name="key" />
              <Textbox
                value={password.value}
                control={password}
                secureTextEntry
                placeholder="Password"
                onChangeText={value =>
                  this.onChangeTextHandler('password', value)
                }
              />
            </View>
            <View style={buttonWrapper}>{this.renderButton()}</View>
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
  inputWrapper: { flexDirection: 'row', width: '100%' },
  buttonWrapper: { alignItems: 'center' }
});

const mapStateToProps = state => {
  const { loading } = state.auth;
  return { loading };
};

export default connect(
  mapStateToProps,
  { doLogin }
)(Signin);
