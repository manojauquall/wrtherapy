import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, View, Text} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';

export default class SignupSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={() => Actions.regscreen()}  style={styles.text}>Create Account</Text>
        <Text onPress={() => Actions.fogscreen()} style={styles.text}>Forgot Password?</Text>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 20,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
	fontFamily: 'cursive',
	fontSize: 23,
	
  },
});
