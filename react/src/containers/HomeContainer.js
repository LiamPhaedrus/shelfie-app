import React, { Component }  from 'react';
import { Link } from 'react-router';

class HomeContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }

  }

  componentDidMount () {
    fetch('/api/v1/books', {
      credentials: 'include',
      method: 'GET'
    })
      .then(response=> response.json())
      .then(parsed=> {
        this.setState({
          name: parsed.user
        })
      })
  }

  render () {
    return(
      <div>
        <h1>Hello {this.state.name}!</h1>
        <span>
          <Link to='/books' className="button">Your Books</Link>
          <Link to='/books/new' className="button">Add Book</Link>
        </span>
      </div>
    )
  }
}

export default HomeContainer
