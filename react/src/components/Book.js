import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

const ItemTypes = {
  BOOK: 'book'
}

const bookSource = {
  beginDrag (props) {
    return {title: props.title, id: props.id}
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Book extends Component {
  render() {
    const { connectDragSource, isDragging, id, title } = this.props
    return connectDragSource(
      <div className='book-drag'>
        X
      </div>
    )
  }
}

export default DragSource(ItemTypes.BOOK, bookSource, collect)(Book)
