import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Spinner } from '../components/Spinner';
import { fetchAll, fetchByStationId } from '../actions';

class MapScreen extends Component {
  static propTypes = {
    fetchAll: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    allStation: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    loading: false,
  };

  componentDidMount() {
    this.props.fetchAll();// eslint-disable-line react/destructuring-assignment
  }

  getStationInformation = (id) => {
    this.props.fetchByStationId(id);
  };

  renderLoading() { // eslint-disable-line  consistent-return
    if (this.props.loading) return <Spinner size="large" />; // eslint-disable-line react/destructuring-assignment
  }

  renderStation() {
    return (
      this.props.allStation.map(city => (
        <TouchableOpacity
          onPress={() => {}}
          key={city.id}
        >
          <Text key={city.id}>
            {city.stationName}
          </Text>
        </TouchableOpacity>
      )));
  }

  render() {
    const { loading, allStation } = this.props;
    return (
      <ScrollView style={{ flex: 1 }}>
        {loading && this.renderLoading()}
        {allStation && !loading && this.renderStation()}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => (
  {
    allStation: state.air.allStation,
    loading: state.air.loading,
    stationId: state.air.stationId,
  }
);

export default connect(mapStateToProps, { fetchAll, fetchByStationId })(
  MapScreen,
);
