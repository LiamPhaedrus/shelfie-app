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
          <Link to='books/new' className="button react-left">Add Book</Link>
          <BackButton />
          <ul>
            {bookList}
          </ul>
          <a href='#top-all-books' className="button react-left">Top</a><BackButton />
        </div>
      </div>
    )
  }
}

export default BooksContainer
