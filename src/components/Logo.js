import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Image} from 'react-native';

import logoImg from '../images/feather.png';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
	 <Text style={{fontSize: 48,color: 'white',fontFamily: 'fantasy'}}> Wr <Image source={logoImg} style={styles.image} /></Text> 
     <Text style={{fontSize: 48,color: 'white',fontFamily: 'fantasy'}}> therapy </Text>
	</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1.0,
	flexDirection: "row",
    marginTop: 70,
	marginLeft:35
  },
  image: {
    width: 45,
    height: 45,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
	},
});
