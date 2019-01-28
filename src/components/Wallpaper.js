import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, Image, View} from 'react-native';

import bgSrc from '../images/wallpaper.png';

export default class Wallpaper extends Component {
  render() {
    return (
	  <View style={styles.picture}>
      {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#10CFFD'
  },
});
