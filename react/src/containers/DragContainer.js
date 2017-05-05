import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import ShelfContainer from './ShelfContainer'
import MoveBookList from './MoveBookList'
import BackButton from '../components/BackButton'

class DragContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      shelves: [],
      books: []
    }

    this.handleSpotPlace = this.handleSpotPlace.bind(this)
  }

  componentDidMount () {
    fetch(`api/v1/shelves`, {
      credentials: 'include',
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ shelves: data.shelves, books: data.books })
      })
  }

  handleSpotPlace (book, spot, shelf) {
    let findBook = (obj) => {
      return obj.id === book
    }
    console.log(`book id- ${book}; spot id- ${spot}; shelf id- ${shelf}`)
    console.log(this.state.books.find(findBook))
    let payload = {placement: {id: book, spot: spot, shelf_id: shelf}}
    fetch(`/api/v1/placements/${book}`, {
      credentials: 'include',
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
      })
      .then(response => response.json())
      .then(data => {
        this.setState({ shelves: data.shelves, books: data.books })
      })
  }

  render () {

    let unplacedBooks = []
    this.state.books.forEach(book => {
      if (book.shelfId === null) {
        unplacedBooks.push(book)
      }
    })

    let shelves = this.state.shelves.map(shelf => {
      let filterById = (obj) => {
        return shelf.bookIds.includes(obj.id)
      }
      let shelvedBooks = this.state.books.filter(filterById)
      return(
        <div key={"shelf" + shelf.id}>
          <h3>{shelf.name}</h3>
          <ShelfContainer
            id={shelf.id}
            size={shelf.size}
            books={shelvedBooks}
            handleAdd={this.handleSpotPlace}
          />
        </div>
      )
    })
    return(
      <div className="dnd-container">
        {shelves}
        <MoveBookList
          books={unplacedBooks}
          id={null}
        />
        <BackButton />
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(DragContainer)
