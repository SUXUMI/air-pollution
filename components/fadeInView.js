import React, {Component} from 'react';
import { Animated } from 'react-native';

class FadeInView extends Component {
  state = {
    fadeAnim: new Animated.Value(0),  // value for opacity
  };

  componentDidMount() {
    Animated.timing(
        this.state.fadeAnim,
        {
          toValue: 1,
          duration: 5000,
        }
    ).start();
  }

  render() {
    let { fadeAnim } = this.state;

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
