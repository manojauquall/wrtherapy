import React, { Component } from 'react'
import {
  View, 
  Text, 
  StyleSheet,
  TextInput,
  Image,
} from 'react-native'

import ajax from '../ajax'
import DealList from './DealList'
import DealDetail from './DealDetail'
import SearchBar from './SearchBar'
import Wallpaper from './Wallpaper';
import logoImg from '../images/feather.png';

export default class SecondScreen extends Component {

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
	  <Wallpaper>
        <View style={[styles.container, styles.main]}>
          <SearchBar searchDeals={this.searchDeals} />
          <DealList deals={dealsToDisplay} onItemPress={this.setCurrentDeal}/>
        </View>
	</Wallpaper>
      );
    }
    return (
	<Wallpaper>
      <View style={[styles.container, styles.main]}>
       <Text style={{fontSize: 48,color: 'white',fontFamily: 'fantasy'}}> Wrtherapy </Text> 
      </View>
	 </Wallpaper>
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