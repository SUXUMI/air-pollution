import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';

import { Spinner } from '../components/Spinner';
import { fetchAll } from '../actions';

class MapScreen extends Component {
  static propTypes = {
    fetchAll: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    allStation: PropTypes.arrayOf(PropTypes.object).isRequired,
    navigation: PropTypes.object.isRequired,
  };

  static defaultProps = {
    loading: false,
  };

  componentDidMount() {
    this.props.fetchAll();// eslint-disable-line react/destructuring-assignment
  }

  renderStation() {
    const { allStation, navigation } = this.props;
    return (
      <View>
        {
            allStation.map(city => (
              <ListItem
                key={city.id}
                title={city.stationName}
                onPressRightIcon={() => {
                  navigation.navigate('show', { stationId: city.id });
                }}
              />
            ))
          }
      </View>
    );
  }

  render() {
    const { loading, allStation } = this.props;

    if (loading) {
      return <Spinner size="large" />;
    }

    return (
      <ScrollView style={{ flex: 1 }}>
        {allStation && !loading && this.renderStation()}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => (
  {
    allStation: state.air.allStation,
    loading: state.air.loading,
    byStationId: state.air.byStationId,
  }
);

export default connect(mapStateToProps, { fetchAll })(MapScreen);
