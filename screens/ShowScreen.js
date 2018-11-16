import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Button, ListItem } from 'react-native-elements';
import {
  fetchByStationId,
  fetchBySensorId,
} from '../actions';
import { Spinner } from '../components/Spinner';

class ShowScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Values',
    headerLeft: (<Button
            title="< Back"
            onPress={() => navigation.navigate('map')}
            backgroundColor="rgba(0,0,0,0)"
            color="#009688"
        />
    ),
  });

  static propTypes = {
    loading: PropTypes.bool,
    navigation: PropTypes.object.isRequired,
    fetchByStationId: PropTypes.func.isRequired,
    stations: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    loading: false,
  };

  componentDidMount() {
    const {navigation} = this.props;
    const stationId = navigation.getParam('stationId');
    this.props.fetchByStationId(stationId);
  }

  sensorId() {
    this.props.stations.map(station => {
      return this.props.fetchBySensorId(station.id);
    })
  };

  renderCard() {
    return (
        <Card title="VALUES" containerStyle={containerStyle}>
          {
            this.props.sensors.map(u=> (
                <View key={Math.random()}>
                  <Text>{u.key}</Text>
                </View>
              ))
              }
          })
        </Card>
    );
  }

  render() {

    const {loading, stations } = this.props;

    if (loading) {
      return <Spinner size="large"/>;
    }
    return (
        <View style={{flex: 1}}>
         {/* {stations && !loading && this.renderCard()}*/}
          {stations && this.sensorId() && !loading && this.renderCard()}
        </View>
    );
  }
}

const mapStateToProps = state => ({
  allStation: state.allReducer.allStation,
  stations: state.stationReducer.stations,
  loading: state.stationReducer.loading,
  sensors: state.stationReducer.sensors,

});

const containerStyle = {
  marginTop: 20,
};

export default connect(mapStateToProps,
    {fetchByStationId, fetchBySensorId})(ShowScreen);
