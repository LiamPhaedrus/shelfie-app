import React, { Component }  from 'react'
import { browserHistory, Navigation } from 'react-router'
import BackButton from '../components/BackButton'

class CaseContainer extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return(
      <div>
        <h1>Placeholder for case page</h1>
        <BackButton />
      </div>
    )
  }
}

export default CaseContainer
