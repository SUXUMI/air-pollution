import React, { Component } from 'react';
import { View as ViewReactNative, Text } from 'react-native';
import { connect } from 'react-redux';
import { Spinner } from '../components/Spinner';
import { fetchAll } from '../actions';
import PropTypes from 'prop-types';

class MapScreen extends Component {

  static propTypes ={
    fetchAll: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.fetchAll();
  }

  renderLoading() {
    if (this.props.loading) return <Spinner size="large" />;
  }

  renderStation() {
    return (
      this.props.allStation.map(city => (<Text key={city.id}>{city.stationName}</Text>)));
  }

  render() {
    return (
      <ViewReactNative style={{ flex: 1 }}>
        {this.props.loading && this.renderLoading()}
        {this.props.allStation && !this.props.loading && this.renderStation()}
      </ViewReactNative>
    );
  }
}

const styles = {
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
};
const mapStateToProps = state => (
  {
    allStation: state.air.allStation,
    stationId: state.air.stationId,
    loading: state.air.loading,
  }
);

export default connect(mapStateToProps, { fetchAll })(MapScreen);
