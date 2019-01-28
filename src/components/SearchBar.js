import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'

class SearchBar extends Component {
  static propTypes = {
    searchDeals: PropTypes.func.isRequired,
  }

  state = {
    searchTerm: '',
  }

  debouncedSearchDeals = debounce(this.props.searchDeals, 300);
  
  handleChange = (searchTerm) => {
    this.setState({ searchTerm }, () => {
      this.debouncedSearchDeals(this.state.searchTerm);
    })
  }

  render() {
    return <TextInput 
    placeholder="Search all deals"
    style={styles.searchInput}
    onChangeText={this.handleChange}>
    </TextInput>
  }
}

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    marginHorizontal: 12,
  },
});

export default SearchBar;