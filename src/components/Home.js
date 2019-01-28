import React, { Component } from 'react'
import {
  View, 
  Text, 
  StyleSheet,
  TextInput,
} from 'react-native'

import ajax from '../ajax'
import DealList from './DealList'
import DealDetail from './DealDetail'
import SearchBar from './SearchBar'

class Home extends Component {

  state = {
    deals: [],
    currentDealId: null,
    dealsFormSearch: [],
  }

  searchDeals = async (searchTerm) => {
    let dealsFormSearch = [];
    if (searchTerm) {
      dealsFormSearch = await ajax.fetchDealSearchResults(searchTerm)
    } 
    this.setState({ dealsFormSearch })
  }

  setCurrentDeal = (dealId) => {
    this.setState({
      currentDealId: dealId,
    })
  }

  unsetCurrentDeal = (dealId) => {
    this.setState({
      currentDealId: null,
    })
  }

  async componentDidMount(){
    const deals = await ajax.fetchInitialDeals();
    this.setState({deals})
  }

  currentDeal = () => {
    return this.state.deals.find((deal) => deal.key === this.state.currentDealId)
  }

  render() {
    if (this.state.currentDealId) {
      return <DealDetail initialDealData={this.currentDeal()} onBack={this.unsetCurrentDeal}/>
    }
    
    const dealsToDisplay = this.state.dealsFormSearch.length > 0 
    ? this.state.dealsFormSearch 
    : this.state.deals

    if (dealsToDisplay.length > 0) {
      return (
        <View style={[styles.container, styles.main]}>
          <SearchBar searchDeals={this.searchDeals} />
          <DealList deals={dealsToDisplay} onItemPress={this.setCurrentDeal}/>
        </View>
      );
    }
    return (
      <View style={[styles.container, styles.main]}>
        <Text style={styles.header}>Bakesale</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    marginTop: 30,
  },
  header: {
    fontSize: 40,
  }
})