import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

import UserInput from './UserInput';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';

import usernameImg from '../images/username.png';
import passwordImg from '../images/password.jpg';
import eyeImg from '../images/eye_black.png';

export default class ForgotForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
    };
    this.showPass = this.showPass.bind(this);
  }

  showPass() {
    this.state.press === false
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  }

  render() {
    return (
      <View  style={styles.container}>
	  <UserInput
          source={usernameImg}
          placeholder="Email"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
        />
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: 'center',
  },
  btnEye: {
	position: 'absolute',
    top:65,
    right: 28,
  },
  
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
});
