import React from 'react';
import { View, Text } from 'react-native';
import { Spinner } from '../components/Spinner';

export function renderLoading() {
  return (
    <View style={styles.viewStyle}>
      <Spinner size="large" />
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

export function changeColor(obj1, obj2) {
  const fin = {};
  for (const key of Object.keys(obj2)) {
    if (obj1.hasOwnProperty(key)) {
      if (obj2[key] > obj1[key][1]) {
        fin[key] = 'red';
      } else if (obj2[key] > obj1[key][0]) {
        fin[key] = 'orange';
      } else fin[key] = 'black';
    }
  }
  return fin;
}

export function changeArray(arr1, arr2) {
  const res = [];
  for (let i = 0; i < arr1.length; i++) {
    res.push(arr1[i].concat(arr2[i]));
  }
  return res;
}

const styles = ({
  viewStyle: { flex: 1, justifyContent: 'center' },
});
