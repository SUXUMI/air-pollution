import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { Row, Table, Cell, TableWrapper } from 'react-native-table-component';
import {
  fetchByStationId,
  reset,
} from '../actions';
import {
  renderLoading,
  hasErrorFunction,
  changeColor,
  changeArray,
} from '../utils/functions';
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

  componentDidMount() {
    const { navigation } = this.props;
    const stationId = navigation.getParam('stationId');
    this.props.fetchByStationId(stationId); // eslint-disable-line react/destructuring-assignment
  }

  componentWillUnmount() {
    this.props.reset(); // eslint-disable-line react/destructuring-assignment
  }

  renderTable() {
    const { sensors, navigation } = this.props;
    const cityName = navigation.getParam('cityName');
    const tableHead = ['parameter', 'value'];
    const result = Object.keys(sensors)
      .map(key => [key, sensors[key].toFixed(2).toString()]);
    const limits = changeColor(norms, sensors);
    const colors = Object.keys(limits).map(key => limits[key]);
    const resultWithColor = changeArray(result, colors);

    return (
      <View style={styles.container}>
        <Text style={styles.textComp}>Station:</Text>
        <Text style={styles.textComp}>{cityName}</Text>
        <Table borderStyle={styles.border}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          {
              resultWithColor.map(rowData => (
                <TableWrapper key={Math.random()} style={styles.row}>
                  {
                      rowData.slice(0, -1).map((cellData, cellIndex) => (
                        <Cell
                          key={Math.random()}
                          data={cellData}
                          textStyle={[styles.text,
                            {
                              color: cellIndex === 1
                                ? rowData[2]
                                : 'black',
                            }]}
                        />
                      ))
                    }
                </TableWrapper>
              ))
            }
        </Table>
        <Text style={[styles.legend, { paddingTop: 15 }]}>Legend:</Text>
        <Text style={styles.legend}>
          <Text style={{ color: 'orange' }}>Orange </Text>
            - limit values exceeded
        </Text>
        <Text style={styles.legend}>
          <Text style={{ color: 'red' }}>Red </Text>
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
        {oneStation && sensors && !hasError && !loading
          && this.renderTable()}
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
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  head: {
    height: 40,
    backgroundColor: '#ABDCD7',
  },
  text: {
    margin: 6,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  legend: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  border: {
    borderWidth: 1,
    borderColor: '#009688',
  },
  row: {
    flexDirection: 'row',
  },
});

ShowScreen.propTypes = {
  loading: PropTypes.bool,
  navigation: PropTypes.object.isRequired,
  fetchByStationId: PropTypes.func.isRequired,
  oneStation: PropTypes.arrayOf(PropTypes.object),
  reset: PropTypes.func.isRequired,
  sensors: PropTypes.object,
  hasError: PropTypes.bool,
};

ShowScreen.defaultProps = {
  loading: false,
  oneStation: [],
  sensors: {},
  hasError: false,
};

export default connect(mapStateToProps, { fetchByStationId, reset })(ShowScreen);
