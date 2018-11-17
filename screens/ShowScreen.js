import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Button, ListItem } from 'react-native-elements';
import {
  fetchByStationId,
  reset,
} from '../actions';
import { Spinner } from '../components/Spinner';
import { RESET } from '../actions/types';

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
    oneStation: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    loading: false,
  };


  componentDidMount() {
    const {navigation} = this.props;
    const stationId = navigation.getParam('stationId');
    this.props.fetchByStationId(stationId);
  }

  componentWillUnmount(){
    this.props.reset();
  }

  renderCard() {
    return (
        <Card title="VALUES" containerStyle={containerStyle}>
          {
            <View key={Math.random()}>
              <Text>works</Text>
            </View>
          }
        </Card>
    );
  }

  render() {

    const {loading, oneStation} = this.props;

    if (loading) {
      return <Spinner size="large"/>;
    }
    return (
        <View style={{flex: 1}}>
          {oneStation && this.renderCard()}
        </View>
    );
  }
}

const mapStateToProps = state => ({
  allStation: state.allReducer.allStation,
  oneStation: state.stationReducer.oneStation,
  sensors: state.stationReducer.sensors,

});

const containerStyle = {
  marginTop: 20,
};

export default connect(mapStateToProps, {fetchByStationId, reset})(
    ShowScreen);
