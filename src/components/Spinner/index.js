import React from 'react';
import { ActivityIndicator } from 'react-native';

import { colors } from '../../shared/utils';

export const Spinner = props => (
  <ActivityIndicator size="large" color={colors.success} {...props} />
);
