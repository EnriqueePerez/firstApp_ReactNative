import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Switch,
  Alert,
  PixelRatio,
} from 'react-native';
let state;
class Body extends Component {
  //function Body(props) {
  state = {switch1Value: false, switch2Value: false};
  toggleSwitch1 = value => {
    this.setState({switch1Value: value});
  };
  toggleSwitch2 = value => {
    this.setState({switch2Value: value});
  };
  // const [isEnable, setIsEnabled] = useState(false);
  // const tog gleSwitch = () => setIsEnabled(previousState => !previousState);
  render() {
    return (
      <View>
        <SafeAreaView>
          <Text style={styles.categoryLabel}>Categoria</Text>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Texto de Boton</Text>
            <Switch
              style={styles.buttonContainer}
              trackColor={{false: '#767577', true: '#21852d'}}
              thumbColor={this.state.switch1Value ? '#5ac73c' : '#9daeb3'}
              onValueChange={this.toggleSwitch1}
              value={this.state.switch1Value}
              onChange={() => {
                if (this.state.switch1Value == false) {
                  Alert.alert('Encendido');
                } else {
                  Alert.alert('Apagado');
                }
              }}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Texto de Boton 2</Text>
            <Switch
              style={styles.buttonContainer}
              trackColor={{false: '#767577', true: '#21852d'}}
              thumbColor={this.state.switch2Value ? '#5ac73c' : '#9daeb3'}
              onValueChange={this.toggleSwitch2}
              value={this.state.switch2Value}
              onChange={() => {
                if (this.state.switch2Value == false) {
                  Alert.alert('Encendido');
                } else {
                  Alert.alert('Apagado');
                }
              }}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    // paddingTop: 5,
    marginHorizontal: 5,
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    // alignItems: 'center',
    backgroundColor: 'blue',
    // alignSelf: 'flex-start',
    borderRadius: 10,
  },
  buttonContainer: {
    right: 20,
    // marginRight: 20,
    // width: 50,
    // height: 25,
    // alignSelf: 'flex-end',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    // marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 0,
    borderWidth: 0,
    padding: 0,
    borderTopWidth: 1 / PixelRatio.get(),
    borderColor: '#d6d7da',
    padding: 10,
    alignItems: 'center',
  },
  rowLabel: {
    left: 10,
    fontSize: 15,
    flex: 1,
  },
  categoryLabel: {
    fontSize: 15,
    textAlign: 'left',
    left: 10,
    padding: 10,
    fontWeight: 'bold',
  },
  lastRow: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 0,
    borderWidth: 0,
    padding: 0,
    borderTopWidth: 1 / PixelRatio.get(),
    borderBottomWidth: 1 / PixelRatio.get(),
    borderColor: '#d6d7da',
    padding: 10,
    alignItems: 'center',
  },
});

export default Body;
