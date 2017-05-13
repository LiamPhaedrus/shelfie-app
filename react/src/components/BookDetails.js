import React, { Component }  from 'react'
import { Link } from 'react-router'

const BookDetails = (props) => {
  const { info } = props
  let bookStuff = 'Loading...'

  let showImage = ''
  if (info.cover_photo) {
    showImage = <img src={info.cover_photo} alt={`${info.title}`} className='detail-cover medium-6 columns end' />
  }

  if (info.location_info === '') {
    bookStuff = <div>
      <div className='medium-6 columns'>
        <h1><span className='title-strong'>{info.title}</span></h1>
        <h3>by {info.author}</h3>
        <p>ISBN - {info.isbn}</p>
        <h3>No location given</h3>
      </div>
      {showImage}
      </div>
  } else if (info.location_info) {
    bookStuff = <div>
      <div className='medium-6 columns'>
        <h1><span className='title-strong'>{info.title}</span></h1>
        <h3>by {info.author}</h3>
        <p>ISBN - {info.isbn}</p>
        <h3>Shelf: {info.location_info.shelf_name}</h3>
        <h3>Case: {info.location_info.case_name} at {info.location_info.case_location}</h3>
      </div>
      {showImage}
      </div>
  }
  return(
    <div className='book-show-info'>
      {bookStuff}
    </div>
  )
}

export default BookDetails
