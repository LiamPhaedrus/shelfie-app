import React, { Component }  from 'react'
import { Link } from 'react-router'

const BookDetails = (props) => {
  const { info } = props
  let bookStuff = 'Loading...'
  if (info.location_info === '') {
    bookStuff = <div>
      <h1><span className='title-strong'>{info.title}</span></h1>
      <h3>by {info.author}</h3>
      <p>ISBN - {info.isbn}</p>
      <h3>No location given</h3>
      </div>
  } else if (info.location_info) {
    bookStuff = <div>
      <h1><span className='title-strong'>{info.title}</span></h1>
      <h3>by {info.author}</h3>
      <p>ISBN - {info.isbn}</p>
      <h3>Shelf: {info.location_info.shelf_name}</h3>
      <h3>Case: {info.location_info.case_name} at {info.location_info.case_location}</h3>
      </div>
  }
  return(
    <div>
      {bookStuff}
    </div>
  )
}

export default BookDetails
