import React from 'react';
import { View, Text } from 'react-native';
import { Spinner } from '../components/Spinner';

export function renderLoading() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Spinner size="large" />
;
    </View>
  );
}

export function hasErrorFunction() {
  return (
    <View>
      <Text>There is something wrong with API data, try again later!!</Text>
    </View>
  );
}
