import React, { Component }  from 'react'
import TextField from '../components/TextField'


class ApiSearchContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: '',
      results: []
    }
    this.key = '3vltUSHHU74tFbr9XV8SA'
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch (event) {
    this.setState({ searchTerm: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.handleFetch(this.state.searchTerm)
  }

  handleFetch (query) {
    fetch(`https://www.goodreads.com/search/index.xml?key=${this.key}&q=${query}`)
    .then(response => console.log(response))
  }

  render () {
    return(
      <div className="search-gr">
        <h1>hello there</h1>
        <form onSubmit={this.handleSubmit}>
          <TextField
            content={this.state.searchTerm}
            label="Search GoodReads"
            name="form-search"
            handlerFunction={this.handleSearch}
          />
          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default ApiSearchContainer
