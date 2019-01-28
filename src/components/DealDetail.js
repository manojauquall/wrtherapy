import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import PropTypes from 'prop-types'

import {priceDisplay} from '../components/util'
import ajax from '../ajax'

class DealDetail extends Component {
  static propTypes = {
    initialDealData: PropTypes.object.isRequired,
    onBack: PropTypes.func.isRequired,
  }
  state = {
    deal: this.props.initialDealData,
  }

  async componentDidMount() {
    console.log(this.state.deal.key)
    const fullDeal = await ajax.fetchDealDetail(this.state.deal.key)
    console.log(fullDeal)
    this.setState({
      deal: fullDeal,
    });
  }

  render() {
    const {deal} = this.state
    return (
      <View style={styles.deal}>
        <TouchableOpacity onPress={this.props.onBack}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <View style={{ paddingTop: 10 }}>
          <ScrollView>
            <Image source={{uri: deal.media[0]}} style={styles.image}/>
            <View style={styles.info}>
              <Text style={styles.title}>{deal.title}</Text>
              <View style={styles.footer}>
                <Text style={styles.cause}>{deal.cause.name}</Text>
                <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
              </View>
              <View style={{ paddingTop: 20 }}>
                {deal.user && 
                  (<View>
                  <Image source={{uri: deal.user.avatar}} style={styles.avatar}/>
                  <Text>{deal.user.name}</Text>
                  </View>
                )}
                <Text>{deal.description}</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deal: {
    marginHorizontal: 12,
    marginTop: 50,
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
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
  },
  avatar: {
    width: 60,
    height: 60,
  },
  backButton: {
    marginBottom: 10,
    fontSize: 16,
    color: 'blue'
  }
})

export default DealDetail