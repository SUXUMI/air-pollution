import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';

import { renderLoading, hasErrorFunction } from '../utils/functions';
import { fetchAll } from '../actions';

class MapScreen extends Component {
  static propTypes = {
    fetchAll: PropTypes.func.isRequired,
    loadingList: PropTypes.bool,
    allStation: PropTypes.arrayOf(PropTypes.object),
    navigation: PropTypes.object.isRequired,
    hasError: PropTypes.bool,
  };

  static defaultProps = {
    loadingList: false,
    allStation: [],
    hasError: false,
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
    const { allStation, loadingList, hasError } = this.props;

    return (
      <ScrollView style={{ flex: 1 }}>
        {loadingList && renderLoading()}
        {hasError && hasErrorFunction()}
        {allStation && !loadingList && !hasError && this.renderStation()}
      </ScrollView>
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

export default connect(mapStateToProps, { fetchAll })(MapScreen);
