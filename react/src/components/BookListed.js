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
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

class BookListed extends Component {
  render() {
    const { connectDragSource, isDragging, id, title, author, spot, shelfId, location } = this.props
    let greyOut = ''
    if (shelfId !== null) {
      greyOut = 'grey-out'
    }

    let locationInfo = ''
    if (location !== '') {
      locationInfo = `(${location} - spot ${spot + 1})`
    }

    return connectDragSource(
      <div className={`book-drag ${greyOut}`}>
        <span className='title-strong'>{title}</span> by {author} {locationInfo}
      </div>
    )
  }
}

export default DragSource(ItemTypes.BOOK, bookSource, collect)(BookListed)
