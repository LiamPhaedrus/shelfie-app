import React, { Component }  from 'react'
import { Link } from 'react-router'
import NewBookFormContainer from './NewBookFormContainer'
import BookListTile from '../components/BookListTile'

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
      return(
        <BookListTile
          key={'book' + book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          isbn={book.isbn}
          coverPhoto={book.cover_photo}
          selectedBookId={this.state.selectedBookId}
        />
      )
      // let author = ''
      // if (book.author) {
      //   author = `by ${book.author}`
      // }
      // return(
      //   <li key={"book" + book.id}><Link to={`/books/${book.id}`} className="book-link">
      //     <span className='title-strong'>{book.title}</span> {author}</Link>
      //   </li>
      // )
    })
    return(
      <div className='bg-fade'>
        <div className='columns'>
          <h1>Your Books</h1>
          <Link to='books/new' className="button react-left">Add Book</Link>
          <Link to='/' className="button">Home</Link>
          <div className='row'>
            {bookList}
          </div>
          <a href='#top-all-books' className="button react-left">Top</a>
          <Link to='/' className="button">Home</Link>
        </div>
      </div>
    )
  }
}

export default BooksContainer
