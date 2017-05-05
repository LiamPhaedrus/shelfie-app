import React, { Component }  from 'react'
import { Link } from 'react-router'

class CaseTile extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return(
      <div>
        <p>{this.props.name} - with {this.props.shelfCount} shelves</p>
      </div>
    )
  }
}

export default CaseTile
