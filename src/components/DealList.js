import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import ajax from '../ajax';
import PropTypes from 'prop-types';
import DealItem from '../components/DealItem'

class DealList extends Component {
  static propTypes = {
    deals: PropTypes.array.isRequired,
    onItemPress: PropTypes.func.isRequired,
  }
  render() {
    return (
      <View style={styles.list}>
        <FlatList
          data={this.props.deals}
          renderItem={({item}) => <DealItem deal={item} onPress={this.props.onItemPress}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eee',
    flex: 1,
    width: '100%',
  },
})

export default DealList;