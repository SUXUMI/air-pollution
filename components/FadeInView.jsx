import React, { Component } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

class FadeInView extends Component {

  static propTypes = {
    style: PropTypes.object.isRequired,
  };

  state = {
    fadeAnim: new Animated.Value(0),
  };

  componentDidMount() {

    Animated.timing(
        this.state.fadeAnim, // eslint-disable-line react/destructuring-assignment
        {
          toValue: 1,
          duration: 5000,
        },
    ).start();
  }

  render() {
    const {fadeAnim} = this.state;

    return (
        <Animated.View
            style={{
              ...this.props.style,
              opacity: fadeAnim,
            }}
        >
          {this.props.children}
        </Animated.View>
    );
  }
}

export default FadeInView;
