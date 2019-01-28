import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import {priceDisplay} from '../components/util';
import { ImageBackground } from 'react-native'

class DealItem extends Component {
  static propTypes = {
    deal: PropTypes.object.isRequired,
    onPress:  PropTypes.func.isRequired,
  }
  handlePress = () => {
    this.props.onPress(this.props.deal.key)
  }
  render() {
    const {deal} = this.props;
    return (
      <TouchableOpacity style={styles.deal} onPress={this.handlePress}>
        <ImageBackground source={{uri: deal.media[0]}} style={styles.image} >
   <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
     <Text>{deal.title}</Text>
   </View>
</ImageBackground>
		
		
		
		
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  deal: {
    marginHorizontal: 12,
    marginTop: 12,
  },
  image: {
    width: '100%',
    height: 150,
    
  },
  info: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderWidth: 1,
    borderTopWidth: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row'
  },
  cause: {
    flex: 2,
  },
  price: {
    flex: 1,
    textAlign: 'right',
  }
})

export default DealItem;