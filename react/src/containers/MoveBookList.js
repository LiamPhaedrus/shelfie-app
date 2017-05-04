import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { DropTarget } from 'react-dnd'
import BookListed from '../components/BookListed'

const Types = {
  BOOK: 'book'
}

const listTarget = {
  canDrop(props, monitor) {
    const item = monitor.getItem()
    return true
  },

  hover(props, monitor, component) {

    const clientOffset = monitor.getClientOffset()
    const componentRect = findDOMNode(component).getBoundingClientRect()

    const isJustOverThisOne = monitor.isOver({ shallow: true })

    const canDrop = monitor.canDrop()
  },

  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      return
    }
    const item = monitor.getItem();
    // props.handleAdd(item, component.props.id)
    return { moved: true }
  }
}

function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDropTarget: connect.dropTarget(),
    // You can ask the monitor about the current drag state:
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  }
}

class MoveBookList extends Component {
  render () {
    const { position, isOver, canDrop, connectDropTarget } = this.props
    let books = this.props.books.map(book=> {
      return(
        <BookListed
          key={"book" + book.id}
          id={book.id}
          title={book.title}
          author={book.author}
        />
      )
    })

    return connectDropTarget(
      <div className="booklist-nospot">
        {books}
      </div>
    )
  }
}

export default DropTarget(Types.BOOK, listTarget, collect)(MoveBookList)
