import React, { Component }  from 'react';
import { Link } from 'react-router';

class DashHomePage extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return(
      <div className="home-react">
        <h1>Dashboard</h1>
        <div>
          <Link to='/books' className="button react-left">Your Books</Link>
          <Link to='/shelves' className="button react-right">Move Books</Link>
        </div>
        <div>
          <Link to='#' className="button react-left">Thing One</Link>
          <Link to='#' className="button react-right">Thing Two</Link>
        </div>
        <div>
          <Link to='#' className="button react-left">Build Bookcase</Link>
          <Link to='/shelves/new' className="button react-right">Add Shelf</Link>
        </div>
      </div>
    )
  }
}

export default DashHomePage
