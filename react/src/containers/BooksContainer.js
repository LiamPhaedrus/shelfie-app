import React, { Component }  from 'react'
import { Link } from 'react-router'
import BackButton from '../components/BackButton'

class BooksContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      books: []
    }

  }

  componentDidMount () {
    fetch('/api/v1/books', {
      credentials: 'include',
      method: 'GET'
    })
      .then(response=> response.json())
      .then(parsed=> {
        this.setState({
          name: parsed.user,
          books: parsed.books
        })
      })
  }

  render () {
    let bookTitles = this.state.books.map(book => {
      return(
        <li key={book.id}>{book.title}</li>
      )
    })
    return(
      <div>
        <h1>All of {this.state.name + "'s"} Books</h1>
        <ul>
          {bookTitles}
        </ul>
        <Link to='/books/new' className="button">Add Book</Link>
        <BackButton />
      </div>
    )
  }
}

export default BooksContainer