import React, { Component }  from 'react'
import { Link } from 'react-router'

const CaseTile = (props) =>  {
  let handleClick = () => {
    props.handleClick(props.id)
  }

  let showShelves = ''
  if (props.shelfCount >= 1) {
    showShelves = props.shelves.map(shelf => {
      return(
        <li key={`shelf${shelf.id}`} className='case-shelf'>
          {shelf.name} with {shelf.size} spots for books
        </li>
      )
    })
  }
  let caseInfo =''
  if (props.selectedCaseId === props.id) {
    caseInfo = <div>
      <div className="case-link">
        {props.location}
        <ul>{showShelves}</ul>
      </div>
      </div>
  }
  return(
    <div className='medium-4 columns end'>
      <div className='case-tile' onClick={handleClick}>
        <span>{props.name} - with {props.shelfCount} shelves </span>
        {caseInfo}
      </div>
    </div>
  )
}

export default CaseTile
