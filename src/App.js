import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Signin from './containers/Signin';

export default class App extends Component {
  render() {
    const { container } = styles;

    return (
      <View style={container}>
        <Signin />
      </View>
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
