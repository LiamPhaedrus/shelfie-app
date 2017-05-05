import React, { Component }  from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import BackButton from '../components/BackButton'
import TextField from '../components/TextField'

const NewCaseForm = (props) => {
  return(
    <div className='new-case-fields'>
      <TextField
        content={props.name}
        label="Case Name"
        name="form-casename"
        handlerFunction={props.handleNameChange}
      />
      <TextField
        content={props.location}
        label="Location"
        name="form-location"
        handlerFunction={props.handleLocationChange}
      />
    </div>
  )
}

export default NewCaseForm
