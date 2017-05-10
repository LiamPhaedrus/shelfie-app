import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import SpotContainer from './SpotContainer'

class ShelfContainer extends Component {
  constructor (props) {
    super(props)

    this.renderSpots = this.renderSpots.bind(this)
  }

  renderSpots (num) {
    let arr = []
    for (var i = 0; i < num; i++) {

      let spotBook = this.props.books.filter(book=>{
        return book.spot === i
      })

      arr.push(
        <SpotContainer
          key={"spot" + i}
          id={i}
          shelfId={this.props.id}
          books={spotBook}
          handleAdd={this.props.handleAdd}
        />
      )
    }
    return arr
  }

  render () {
    return (
      <ul className='shelf'>
        {this.renderSpots(this.props.size)}
      </ul>
    )
  }
}

export default ShelfContainer
