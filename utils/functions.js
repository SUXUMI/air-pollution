import { View, Text } from 'react-native';
import { Spinner } from '../components/Spinner';
import React from 'react';

export function renderLoading() {
  return(
      <View style={{flex:1}}>
        <Spinner size="large" />;
      </View>
  )
};

export function hasError(){
  return(
      <View>
        <Text>There is something wrong with API data, try again later!!</Text>
      </View>
  )
}