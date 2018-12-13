import React from 'react';
import { View, Text } from 'react-native';
import { Spinner } from '../components/Spinner';

export function renderLoading() {
  return (
    <View style={styles.viewStyle}>
      <Spinner size="large" />
;
    </View>
  );
}

export function hasErrorFunction() {
  return (
    <View style={styles.viewStyle}>
      <Text>There is something wrong with API data, try again later!!</Text>
    </View>
  );
}

const styles = {
  viewStyle: { flex: 1, justifyContent: 'center' },
};
