import React, { Component }  from 'react'
import { Link } from 'react-router'

const BookTile = (props) => {
  let handleClick = () => {
    props.handleClick(props.id)
  }

  let showAuthor = ''
  if (props.author !== '') {
    showAuthor = <div>{'By ' + props.author}</div>
  }
  let showImage = ''
  if (props.coverPhoto) {
    showImage = <img src={props.coverPhoto} alt={`${props.title}`} />
  }

  let bookInfo = ''
  if (props.selectedBookId === props.id) {
    bookInfo = <div>
      {showAuthor}
      <Link to={`/books/${props.id}`} className="book-link">Go to book page
      {showImage}</Link>
      </div>
  }
  return(
    <div className='medium-4 columns'>
      <div className='book-tile' onClick={handleClick}>
        <span className='title-strong'>{props.title}</span>
        {bookInfo}
      </div>
    </div>
  )
}

export default BookTile
