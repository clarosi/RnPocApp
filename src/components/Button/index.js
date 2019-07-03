import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { fonts } from '../../shared/fonts';
import { colors } from '../../shared/utils';

export const Button = props => {
  const { button, text, disabledButton } = styles;
  const { style, children, disabled } = props;

  if (disabled) {
    return (
      <View style={[button, style, disabledButton]}>
        <Text style={text}>{children}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity {...props} style={[button, style]}>
      <Text style={text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 10,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: colors['success'],
    borderColor: '#27292d'
  },
  disabledButton: { backgroundColor: '#eee', borderColor: '#27292d' },
  text: { fontFamily: fonts.MontserratReg, color: 'black', alignSelf: 'center' }
});
