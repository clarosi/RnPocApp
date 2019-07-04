import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import Signin from './containers/Signin';

export default class App extends Component {
  render() {
    const { container } = styles;

    return (
      <Provider store={store}>
        <View style={container}>
          <Signin />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF'
  }
});
