import React, { Component }  from 'react'
import { Link } from 'react-router'

const CaseTile = (props) =>  {

  return(
    <div>
      <span>{props.name} - with {props.shelfCount} shelves </span>
      <Link to={`/cases/${props.id}`} className="case-link">Edit</Link>
    </div>
  )
}


export default CaseTile
