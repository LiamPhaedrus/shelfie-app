import React, { Component }  from 'react'
import { Link } from 'react-router'
import BackButton from '../components/BackButton'
import NewBookFormContainer from './NewBookFormContainer'

class BooksContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      books: []
    }
    this.addNewBook = this.addNewBook.bind(this)
  }

  componentDidMount () {
    fetch('/api/v1/books', {
      credentials: 'include',
      method: 'GET'
    })
      .then(response=> response.json())
      .then(parsed=> {
        this.setState({
          books: parsed.books
        })
      })
  }

  addNewBook (formPayload) {
    fetch('/api/v1/books', {
      credentials: 'include',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formPayload)
    })
    .then(response => response.json())
    .then(parsed => {
      this.setState({ books: [...this.state.books, ...parsed.book] })
    })
  }

  render () {
    let bookList = this.state.books.map(book => {
      let author = ''
      if (book.author) {
        author = `by ${book.author}`
      }
      return(
        <li key={"book" + book.id}><Link to={`/books/${book.id}`} className="book-link">
          <span className='title-strong'>{book.title}</span> {author}</Link>
        </li>
      )
    })
    return(
      <div className="row top-all-books">
        <div className='columns'>
          <h1 className='heading-move'>Your Books</h1>
          <a href='#addbook' className="button react-left">Add Book</a>
          <BackButton />
          <ul>
            {bookList}
          </ul>
          <div id='addbook'>
            <NewBookFormContainer
              addNewBook={this.addNewBook}
            />
          </div>
          <a href='#top-all-books' className="button react-left">Top</a><BackButton />
        </div>
      </div>
    )
  }
}

export default BooksContainer
