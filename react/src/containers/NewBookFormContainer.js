import React, { Component }  from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import BackButton from '../components/BackButton'
import TextField from '../components/TextField'
import ImageField from '../components/ImageField'

class NewBookFormContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      errors: {},
      title: '',
      author: '',
      isbn: '',
      image: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleISBNChange = this.handleISBNChange.bind(this)
    this.handleFormClear = this.handleFormClear.bind(this)
    this.validateTitle = this.validateTitle.bind(this)
    this.validateISBN = this.validateISBN.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    if (
      this.validateTitle(this.state.title) &&
      this.validateISBN(this.state.isbn)
    ) {
      let payload = {
        book: {
          title: this.state.title,
          author: this.state.author,
          isbn: this.state.isbn,
          cover_photo: this.state.image
        }
      }
      this.props.addNewBook(payload)
      this.handleFormClear(event)
    }
  }

  handleFormClear (event) {
    event.preventDefault()
    this.setState({
      title: '',
      author: '',
      isbn: '',
      image: ''
    })
  }

  handleTitleChange (event) {
    this.validateTitle(event.target.value)
    this.setState({ title: event.target.value })
  }

  handleAuthorChange (event) {
    this.setState({ author: event.target.value })
  }

  handleISBNChange (event) {
    this.validateISBN(event.target.value)
    this.setState({ isbn: event.target.value })
  }

  handleImageChange (event) {
    // event.preventDefault()

    let reader = new FileReader()
    this.setState({
      image: event.target.files[0]
    })
    // let file = event.target.files[0]
    // reader.onload = (upload) => {
    //   this.setState({
    //     image: upload.target.result
    //   })
    // }
    // reader.readAsDataURL(file)
  }

  validateTitle (entry) {
    if (entry === '' || entry === ' ') {
      let newError = { title: 'Title cannot be blank'}
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.title
      this.setState({ errors: errorState })
      return true
    }
  }

  validateISBN (entry) {
    if (entry === '' || entry === ' ') {
      let newError = { isbn: 'ISBN cannot be blank' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else if (isNaN(entry)) {
      let newError = { isbn: 'ISBN must be a number' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else if (entry.length > 13) {
      let newError = { isbn: 'ISBN cannot be more than 13 digits' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.isbn
      this.setState({ errors: errorState })
      return true
    }
  }

  render () {
    let errorDiv
    let errorItems
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }
    return(
      <div>
        <h1>Add a Book</h1>
        <form className='new-book-form callout' onSubmit={this.handleSubmit}>
          {errorDiv}
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
          <ImageField
            content={this.state.image}
            label="Upload Book Cover"
            handlerFunction={this.handleImageChange}
          />
          <div className="button-group">
            <button className="button" onClick={this.handleFormClear}>Clear</button>
            <input className="button" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default NewBookFormContainer
