import React, { Component }  from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import TextField from '../components/TextField'

class NewShelfFormContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      errors: {},
      name: 'shelf',
      size: '20'
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleSizeChange = this.handleSizeChange.bind(this)
  }

  handleSizeChange (event) {
    this.setState({ size: event.target.value })
  }

  handleNameChange (event) {
    this.setState({ name: event.target.value })
  }

  handleAdd (event) {
    event.preventDefault()
    let shelfInfo = { name: this.state.name, size: this.state.size }

    this.props.handleShelfAdd(shelfInfo)
  }

  render () {
    return(
      <div className='medium-centered'>
        <h3>Add A Shelf</h3>
        <div className='new-shelf'>
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

          <button className="button" onClick={this.handleAdd}>Add Shelf</button>
        </div>
      </div>
    )
  }
}

export default NewShelfFormContainer
