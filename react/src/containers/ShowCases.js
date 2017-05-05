import React, { Component }  from 'react'
import { Link } from 'react-router'
import BackButton from '../components/BackButton'
import CaseTile from '../components/CaseTile'

class ShowCases extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cases: []
    }
  }

  componentDidMount () {
    fetch('/api/v1/cases', {
      credentials: 'include',
      method: 'GET'
    })
    .then(response=> response.json())
    .then(parsed=> {
      this.setState({
        cases: parsed
      })
    })
  }

  render () {
    let bookcases = this.state.cases.map(bookcase => {
      return(
        <CaseTile
          key={"bookcase" + bookcase.id}
          id={bookcase.id}
          name={bookcase.name}
          shelfCount={bookcase.shelves.length}
        />
      )
    })
    return(
      <div>
        <h1>Bookcases</h1>
        {bookcases}
        <BackButton />
      </div>
    )
  }
}


export default ShowCases
