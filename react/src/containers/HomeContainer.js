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
      <div className="home-react">
        <h1>Hello {this.state.name}!</h1>
        <div>
          <Link to='/books' className="button react-left">Your Books</Link>
          <Link to='/books/new' className="button react-right">Add Book</Link>
        </div>
        <div>
          <Link to='/' className="button react-left">Shelf Arrangement</Link>
          <Link to='#' className="button react-right">Add Shelf</Link>
        </div>
        <div>
          <Link to='/#' className="button react-left">Move Books</Link>
          <Link to='#' className="button react-right">Add Case</Link>
        </div>
      </div>
    )
  }
}

export default HomeContainer
