import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableOpacity, Linking } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import FadeInView from '../components/FadeInView';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FadeInView style={styles.fadeIn}>
          <Text style={styles.text}>
              Welcome to Polish Air Pollution App based on gios.gov.pl data
          </Text>
        </FadeInView>
        <Button
          large
          title="Tap me!"
          backgroundColor="#009688"
          iconRight={{ name: 'keyboard-backspace' }}
          onPress={() => this.props.navigation.navigate('main')} // eslint-disable-line react/destructuring-assignment
        />
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/potik1')}>
          <Text style={styles.link}>
            Potik1 - github
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009688',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    margin: 20,
  },
  fadeIn: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 4,
  },
  link: {
    fontSize: 20,
    color: 'yellow',
  },
};

WelcomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  navigate: PropTypes.object,
};

WelcomeScreen.defaultProps = {
  navigate: {},
};

export default WelcomeScreen;
