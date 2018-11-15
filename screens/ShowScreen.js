import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-elements';
import { fetchByStationId, fetchBySensorId } from '../actions';
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

  renderCard() {
    return (
        <Card title="VALUES" containerStyle={containerStyle}>
          {
            this.props.stations.map(u => (
                <View key={u.id}>
                  <Text>{u.param.paramFormula}</Text>
                </View>
            ))
          }
        </Card>
    );
  }

  render() {
    const {loading, stationId} = this.props;

    if (loading) {
      return <Spinner size="large"/>;
    }
    return (
        <View style={{flex: 1}}>
          {stationId && !loading && this.renderCard()}
        </View>
    );
  }
}

const mapStateToProps = state => ({
  allStation: state.allReducer.allStation,
  stations: state.stationReducer.stations,
  value: state.stationReducer.stations,
  loading: state.stationReducer.loading,
});

const containerStyle = {
  marginTop: 20,
};

export default connect(mapStateToProps, {fetchByStationId,fetchBySensorId})(ShowScreen);
