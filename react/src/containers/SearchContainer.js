import React, { Component }  from 'react'
import { Link } from 'react-router'
import TextField from '../components/TextField'
import ResultsContainer from './ResultsContainer'

class SearchContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchTerm: ''
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch (event) {
    event.preventDefault()
    this.setState({ searchTerm: event.target.value })
  }

  render () {
    let search = <TextField
      content={this.state.searchTerm}
      label=""
      name="title"
      handlerFunction={this.handleSearch}
      placeholder="Search by title, author, or ISBN"
    />

    return(
      <div>
        <h1>Search</h1>
        <div className='row medium-6 columns'>{search}</div>
        <ResultsContainer
          searchTerm={this.state.searchTerm}
        />
      </div>
    )
  }
}

export default SearchContainer
