import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { Row, Rows, Table } from 'react-native-table-component';
import {
  fetchByStationId,
  reset,
} from '../actions';
import { renderLoading, hasErrorFunction } from '../utils/functions';
import { norms } from '../utils/norms';

class ShowScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
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
    reset: PropTypes.func.isRequired,
    sensors: PropTypes.object,
    hasError: PropTypes.bool,
  };

  static defaultProps = {
    loading: false,
    oneStation: [],
    sensors: {},
    hasError: false,
  };

  componentDidMount() {
    const { navigation } = this.props;
    const stationId = navigation.getParam('stationId');
    this.props.fetchByStationId(stationId); // eslint-disable-line react/destructuring-assignment
  }

  componentWillUnmount() {
    this.props.reset(); // eslint-disable-line react/destructuring-assignment
  }

  renderTable() {
    const tableHead = ['parameter', 'value'];
    const { sensors, navigation } = this.props;
    const cityName = navigation.getParam('cityName');
    const dataObject = sensors;
    const result = Object.keys(dataObject)
      .map(key => [key, dataObject[key].toFixed(2).toString()]);
    const { container, textComp, head, text, border, legend } = styles;

    return (
      <View style={container}>
        <Text style={textComp}>Station:</Text>
        <Text style={textComp}>{cityName}</Text>
        <Table borderStyle={border}>
          <Row data={tableHead} style={head} textStyle={text} />
          <Rows data={result} textStyle={text} />
        </Table>
        <Text style={[legend, { paddingTop: 15 }]}>Legend:</Text>
        <Text style={legend}>
          <Text style={{ color: 'orange' }}>100</Text>
            - limit values exceeded
        </Text>
        <Text style={legend}>
          <Text style={{ color: 'red' }}>100</Text>
            - alarm values exceeded
        </Text>
      </View>
    );
  }

  render() {
    const { oneStation, loading, hasError, sensors } = this.props;

    return (
      <View style={{ flex: 1 }}>
        {loading && renderLoading()}
        {hasError && hasErrorFunction()}
        {oneStation && sensors && !loading && !hasError && this.renderTable()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  oneStation: state.stationReducer.oneStation,
  sensors: state.stationReducer.sensors,
  loading: state.stationReducer.loading,
  hasError: state.stationReducer.hasError,

});

const styles = ({
  textComp: {
    paddingBottom: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#ABDCD7' },
  text: { margin: 6, textAlign: 'center' },
  legend: { marginTop: 10, fontWeight: 'bold' },
  border: { borderWidth: 1, borderColor: '#009688' },
});

export default connect(mapStateToProps, { fetchByStationId, reset })(ShowScreen);
