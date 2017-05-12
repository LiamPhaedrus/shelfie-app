import React, { Component }  from 'react'
import { Link } from 'react-router'
import TextField from '../components/TextField'
import BookListTile from '../components/BookListTile'
import ResultsTileContainer from '../containers/ResultsTileContainer'

class BooksContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      books: [],
      searchTerm: ''
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch (event) {
    event.preventDefault()
    this.setState({ searchTerm: event.target.value })
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
    // let bookList = this.state.books.map(book => {
    //   return(
    //     <BookListTile
    //       key={'book' + book.id}
    //       id={book.id}
    //       title={book.title}
    //       author={book.author}
    //       isbn={book.isbn}
    //       coverPhoto={book.cover_photo}
    //       searchTerm={this.state.searchTerm}
    //     />
    //   )
    // })

    let search = <TextField
      content={this.state.searchTerm}
      label=""
      name="title"
      handlerFunction={this.handleSearch}
      placeholder="Search by title, author, or ISBN"
    />
    return(
      <div className='bg-fade'>
        <div className='columns'>
          <h1>Your Books</h1>
          <div className='show-for-small-only'>
            <h1>Search Your Books</h1>
            <div className='small-12 columns'>{search}</div>
          </div>
          <div className='hide-for-small-only row medium-9 large-7 columns search-move'>
            <div className='input-group'>
              <span className='input-group-label search-fix'><h2>Search</h2></span>
              <span className='input-group-field search-fix'>{search}</span>
            </div>
          </div>
          <Link to='books/new' className="button react-left">Add Book</Link>
          <Link to='/' className="button">Home</Link>
          <div className='row columns'>
            <ResultsTileContainer
              books={this.state.books}
              searchTerm={this.state.searchTerm}
            />
          </div>
          <a href='#top-all-books' className="button react-left">Top</a>
          <Link to='/' className="button">Home</Link>
        </div>
      </div>
    )
  }
}

export default BooksContainer
