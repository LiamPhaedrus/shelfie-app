import React, { Component }  from 'react'
import { Link } from 'react-router'
import BackButton from '../components/BackButton'
import TextField from '../components/TextField'

class NewBookFormContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      author: '',
      isbn: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleISBNChange = this.handleISBNChange.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log(this.state)
  }

  handleTitleChange (event) {
    this.setState({ title: event.target.value })
  }

  handleAuthorChange (event) {
    this.setState({ author: event.target.value })
  }

  handleISBNChange (event) {
    this.setState({ isbn: event.target.value })
  }

  render () {
    return(
      <div>
        <h1>Add a Book</h1>
        <form className='new-book-form callout' onSubmit={this.handleSubmit}>
          <TextField
            content={this.state.title}
            label="Title"
            name="form-title"
            handlerFunction={this.handleTitleChange}
          />
          <TextField
            content={this.state.author}
            label="Author"
            name="form-author"
            handlerFunction={this.handleAuthorChange}
          />
          <TextField
            content={this.state.isbn}
            label="ISBN"
            name="form-isbn"
            handlerFunction={this.handleISBNChange}
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

export default NewBookFormContainer
