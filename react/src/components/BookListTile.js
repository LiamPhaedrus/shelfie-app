import React, { Component }  from 'react'
import { Link } from 'react-router'

const BookListTile = (props) => {
  let showAuthor = ''
  if (props.author !== '') {
    showAuthor = <span>{'By ' + props.author}</span>
  }
  let showImage = ''
  if (props.coverPhoto) {
    showImage = <img src={props.coverPhoto} alt={`${props.title}`} />
  }
  return(
    <Link to={`/books/${props.id}`} className='medium-6 columns end'>
      <div className='media-object book-list-tile'>
        <div className='media-object-section'>
          <div className='thumbnail'>
            {showImage}
          </div>
        </div>
        <div className='media-object-section'>
          <p><span className='title-strong'>{props.title}</span> {showAuthor}</p>
        </div>
      </div>
    </Link>
  )
}

export default BookListTile
