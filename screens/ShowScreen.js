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
    allStation: PropTypes.arrayOf(PropTypes.object),
    hasError: PropTypes.bool,
  };

  static defaultProps = {
    loading: false,
    oneStation: [],
    allStation: [],
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
    const { sensors, allStation, oneStation } = this.props;
    const dataObject = sensors;
    const result = Object.keys(dataObject).map(key => [key, dataObject[key].toFixed(2).toString()]);

    const checking = allStation.filter((station) => {
      if ((oneStation[0] !== undefined && oneStation[0].stationId !== undefined) && (oneStation[0].stationId === station.id)) {
        return station;
      }
      return null;
    });

    const cityName = Object.assign({}, ...checking).stationName;
    const { container, textComp, head, text, border } = styles;

    return (
      <View style={container}>
        <Text style={textComp}>
Station:
          {cityName}
        </Text>
        <Table borderStyle={border}>
          <Row
            data={tableHead}
            style={head}
            textStyle={text}
          />
          <Rows data={result} textStyle={text} />
        </Table>
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
        <Text>Dupa</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  allStation: state.allReducer.allStation,
  oneStation: state.stationReducer.oneStation,
  sensors: state.stationReducer.sensors,
  loading: state.stationReducer.loading,
  hasError: state.stationReducer.hasError,

});

const styles = ({
  textComp: { paddingBottom: 20, fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#ABDCD7' },
  text: { margin: 6, textAlign: 'center' },
  border: { borderWidth: 1, borderColor: '#009688' },
});

export default connect(mapStateToProps, { fetchByStationId, reset })(ShowScreen);
