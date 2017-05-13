import React, { Component }  from 'react'
import { Link } from 'react-router'
import BackButton from '../components/BackButton'
import CaseTile from '../components/CaseTile'

class ShowCases extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cases: [],
      selectedCaseId: ''
    }
    this.handleSelectCase = this.handleSelectCase.bind(this)
  }

  handleSelectCase (id) {
    if (id === this.state.selectedCaseId) {
      this.setState({ selectedCaseId: '' })
    } else {
      this.setState({ selectedCaseId: id })
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
          location={bookcase.location}
          shelves={bookcase.shelves}
          shelfCount={bookcase.shelves.length}
          handleClick={this.handleSelectCase}
          selectedCaseId={this.state.selectedCaseId}
        />
      )
    })

    return(
      <div className='bg-fade'>
        <div className='columns'>
          <h1>Bookcases</h1>
          <Link to='cases/new' className="button react-left">Add Case</Link>
          <div className='row columns'>
            {bookcases}
          </div>
          <div className='row columns'>
            <BackButton />
          </div>
        </div>
      </div>
    )
  }
}


export default ShowCases
