import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MapView, { Marker } from 'react-native-maps';

import { fetchAll, reset } from '../actions';
import { renderLoading, hasErrorFunction } from '../utils/functions';

class MapScreen extends Component {
  static propTypes = {
    fetchAll: PropTypes.func.isRequired,
    allStation: PropTypes.arrayOf(PropTypes.object),
    navigation: PropTypes.object.isRequired,
    hasError: PropTypes.bool,
    loadingList: PropTypes.bool,
  };

  static defaultProps = {
    allStation: [],
    loadingList: false,
    hasError: false,
  };

  state = {
    mapLoaded: false,
    region: {
      latitude: 52.285073,
      longitude: 19.933018,
      latitudeDelta: 9.22,
      longitudeDelta: 4.21,
    },
  };

  componentDidMount() {
    this.props.fetchAll();// eslint-disable-line react/destructuring-assignment
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = (region) => {
    this.setState({ region });
  };

  renderMapView() {
    const { allStation, navigation } = this.props;
    const { region } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={region}
          onRegionChangeComplete={this.onRegionChangeComplete}
        >
          {allStation.map(city => (
            <Marker
              key={Math.random()}
              coordinate={{
                latitude: parseFloat(city.gegrLat),
                longitude: parseFloat(city.gegrLon),
              }}
              description={city.stationName}
              onPress={() => {
                navigation.navigate('show',
                  { stationId: city.id, cityName: city.stationName });
              }}
            />
          ))}
        </MapView>
      </View>
    );
  }

  render() {
    const { allStation, loadingList, hasError } = this.props;
    const { mapLoaded } = this.state;

    return (
      <View style={{ flex: 1 }}>
        {hasError && hasErrorFunction()}
        {loadingList && !mapLoaded && renderLoading()}
        {allStation && !loadingList && !hasError && this.renderMapView()}
      </View>
    );
  }
}

const mapStateToProps = state => (
  {
    allStation: state.allReducer.allStation,
    loadingList: state.allReducer.loadingList,
    hasError: state.allReducer.hasError,
  }
);

export default connect(mapStateToProps, { fetchAll, reset })(MapScreen);
