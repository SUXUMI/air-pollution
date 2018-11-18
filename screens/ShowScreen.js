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

  componentWillUnmount() {
    this.props.reset();
  }

  renderTable() {

    const dataObject = this.props.sensors;

    const ArrayFromObject = Object.entries(dataObject);
    const data = ArrayFromObject.map(String);

    console.log(ArrayFromObject);

    const tableData = [
      ["1", "2"]];

    const tableHead = ['param', 'value'];

    const {container, head, text, border} = styles;
    return (
        <View style={container}>
          <Table borderStyle={border}>
            <Row data={tableHead} style={head}
                 textStyle={text}/>
            <Rows data={tableData} textStyle={text}/>
          </Table>
        </View>
    );
  };

  render() {

    const {sensors,loading} = this.props;

    if (loading) {
      return <Spinner size="large"/>;
    }
    return (
        <View style={{flex: 1}}>
          {!sensors && loading}
          {sensors && this.renderTable()}
        </View>
    );
  }
}

const mapStateToProps = state => ({
  allStation: state.allReducer.allStation,
  oneStation: state.stationReducer.oneStation,
  sensors: state.stationReducer.sensors,

});

const styles = ({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6},
  border: {borderWidth: 2, borderColor: '#c8e1ff'},
});

export default connect(mapStateToProps, {fetchByStationId, reset})(
    ShowScreen);
