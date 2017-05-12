import React, { Component }  from 'react'
import BookListTile from '../components/BookListTile'

class ResultsTileContainer extends Component {
  constructor (props) {
    super(props)
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

    let searched = this.props.books.filter(searchMatch)

    let bookResults = searched.map(book => {
      return(
        <BookListTile
          key={'book' + book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          isbn={book.isbn}
          coverPhoto={book.cover_photo}
        />
      )
    })

    return(
      <div>
        {bookResults}
      </div>
    )
  }
}

export default ResultsTileContainer
