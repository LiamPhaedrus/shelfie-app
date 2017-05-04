import React, { Component }  from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import BackButton from '../components/BackButton'
import TextField from '../components/TextField'

class NewShelfFormContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      errors: {},
      shelves: [],
      name: 'shelf',
      size: '20'
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSizeChange = this.handleSizeChange.bind(this)
  }

  handleSizeChange (event) {
    this.setState({ size: event.target.value })
  }

  handleNameChange (event) {
    this.setState({ name: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log(this.state.size)
    console.log(this.state.name)
  }

  render () {
    return(
      <div className='medium-9 medium-centered columns'>
        <h2>Add A Shelf</h2>
        <form className='new-shelf-form callout' onSubmit={this.handleSubmit}>
          <TextField
            content={this.state.name}
            label="Shelf Name"
            name="form-shelfname"
            handlerFunction={this.handleNameChange}
          />
          <TextField
            content={this.state.size}
            label="Shelf Size"
            name="form-shelfsize"
            handlerFunction={this.handleSizeChange}
          />

          <div className="button-group">
            <input className="button" type="submit" value="Submit" />
          </div>
        </form>
        <BackButton />
      </div>
    )
  }
}

export default NewShelfFormContainer
