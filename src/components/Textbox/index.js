import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { fonts } from '../../shared/fonts';

export const Textbox = props => {
  const { control, style } = props;
  const { container, textbox, textErr, invalid } = styles;
  const dynamicStyle = control.valid || !control.touch ? null : invalid;

  return (
    <View style={container}>
      <TextInput
        maxLength={40}
        {...props}
        style={[textbox, style, dynamicStyle]}
      />
      {dynamicStyle ? <Text style={textErr}>{control.errMsg}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 25 },
  textbox: {
    fontFamily: fonts.MontserratReg,
    height: 50,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#27292d'
  },
  textErr: { fontFamily: fonts.MontserratReg, color: 'red', padding: 5 },
  invalid: { borderColor: 'red' }
});
