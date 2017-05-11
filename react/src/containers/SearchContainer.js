import React, { Component }  from 'react'
import { Link } from 'react-router'
import TextField from '../components/TextField'
import ResultsContainer from './ResultsContainer'
import BackButton from '../components/BackButton'

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
        <div className='show-for-small-only'>
          <h2>Search</h2>
          <div className='row columns'>{search}</div>
        </div>
        <div className='hide-for-small-only row medium-9 large-7 columns'>
          <div className='input-group'>
            <span className='input-group-label search-fix'><h2>Search</h2></span>
            <span className='input-group-field search-fix'>{search}</span>
          </div>
        </div>
        <div className='row columns'>
          <ResultsContainer
            searchTerm={this.state.searchTerm}
          />
        </div>
        <div className=''><BackButton /></div>
      </div>
    )
  }
}

export default SearchContainer
