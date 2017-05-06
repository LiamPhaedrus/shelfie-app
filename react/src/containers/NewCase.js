import React, { Component }  from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import NewShelfFormContainer from './NewShelfFormContainer'
import BackButton from '../components/BackButton'
import NewCaseForm from './NewCaseForm'


class NewCase extends Component {
  constructor (props) {
    super(props)
    this.state = {
      shelves: [],
      location: '',
      name: ''
    }
    this.handleShelfAdd = this.handleShelfAdd.bind(this)
    this.handleSubmitCase = this.handleSubmitCase.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleFormClear = this.handleFormClear.bind(this)
    this.handleFetch = this.handleFetch.bind(this)
  }

  handleFormClear (event) {
    event.preventDefault()
    this.setState({
      shelves: [],
      location: '',
      name: ''
    })
  }

  handleNameChange (event) {
    this.setState({ name: event.target.value })
  }

  handleLocationChange (event) {
    this.setState({ location: event.target.value })
  }

  handleShelfAdd (shelfInfo) {
    this.setState({ shelves: this.state.shelves.concat([shelfInfo]) })
  }

  handleSubmitCase (event) {
    event.preventDefault()
    let payload = {
      bookcase: {
        name: this.state.name,
        location: this.state.location
      },
      shelves: this.state.shelves
    }
    this.handleFetch(payload)

  }

  handleFetch (payload) {
    fetch('/api/v1/cases', {
      credentials: 'include',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      if (data.status <= 299) {
        browserHistory.push(`/cases`)
      }
    })
  }

  render () {
    let caseShelves = this.state.shelves.map((shelf, index)=> {
      return(
        <div key={"case-shelf-" + index} className='case-shelf'>
          {shelf.name} with size {shelf.size}
        </div>
      )
    })
    return(
      <div className='build-case'>
        <h1>Build Bookcase</h1>
        <form className='callout' onSubmit={this.handleSubmitCase}>
          <NewCaseForm
            handleLocationChange={this.handleLocationChange}
            handleNameChange={this.handleNameChange}
            name={this.state.name}
            location={this.state.location}
          />
          <div className='wip-case'>
            {caseShelves}
          </div>
          <NewShelfFormContainer
            handleShelfAdd={this.handleShelfAdd}
          />
          <div className="button-group">
            <input className="button" type="submit" value="Submit" />
            <button className="button" onClick={this.handleFormClear}>Clear</button>
          </div>
        </form>
        <BackButton />
      </div>
    )
  }
}

export default NewCase
