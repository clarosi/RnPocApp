import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { fonts } from '../../shared/fonts';

export const Heading = props => {
  const { text } = styles;
  const { style, children } = props;

  return (
    <Text {...props} style={[text, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.MontserratBold,
    fontSize: 25,
    marginBottom: 20
  }
});
