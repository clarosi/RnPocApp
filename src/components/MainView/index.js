import React from 'react';
import { View, StyleSheet } from 'react-native';

export const MainView = props => {
  const { container } = styles;
  const { style, children } = props;

  return (
    <View {...props} style={[container, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 }
});
