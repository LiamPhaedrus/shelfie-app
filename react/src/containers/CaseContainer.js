import React, { Component }  from 'react'
import { browserHistory, Navigation } from 'react-router'
import BackButton from '../components/BackButton'

class CaseContainer extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return(
      <div className='bg-fade'>
        <div className='columns'>
          <h1>Placeholder for a case page</h1>
          <BackButton />
        </div>
      </div>
    )
  }
}

export default CaseContainer
