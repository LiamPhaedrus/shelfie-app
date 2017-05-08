import React, { Component }  from 'react'
import BookTile from '../components/BookTile'

class ResultsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      books: [],
      selectedBookId: ''
    }
    this.fetchBooks = this.fetchBooks.bind(this)
    this.handleSelectBook = this.handleSelectBook.bind(this)
  }

  componentDidMount () {
    this.fetchBooks()
  }

  fetchBooks () {
    fetch('/api/v1/books', {
      credentials: 'same-origin',
      method: 'GET'
    })
    .then(response=> response.json())
    .then(parsed=> {
      this.setState({
        books: parsed.books
      })
      console.log(parsed)
    })
  }

  handleSelectBook (id) {
    if (id === this.state.selectedBookId) {
      this.setState({ selectedBookId: '' })
    } else {
      this.setState({ selectedBookId: id })
    }
  }

  render () {
    let searchTerm = this.props.searchTerm.toLowerCase()

    let searchMatch = (book) => {
      if (searchTerm === '') {
        return true
      } else {
        return book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.isbn.includes(searchTerm)
      }
    }

    let searched = this.state.books.filter(searchMatch)

    let bookResults = searched.map(book => {
      return(
        <BookTile
          key={'book' + book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          isbn={book.isbn}
          coverPhoto={book.cover_photo}
          selectedBookId={this.state.selectedBookId}
          handleClick={this.handleSelectBook}
        />
      )
    })

    return(
      <div className='search-results'>
        <h2>Results</h2>
        {bookResults}
      </div>
    )
  }
}

export default ResultsContainer
