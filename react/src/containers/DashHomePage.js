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
        <div className='row'>
          <div className='dash-outer medium-4 columns'>
            <Link to='/books' className='dash-tile'>Your Books</Link>
          </div>
          <div className='dash-outer medium-4 columns'>
            <Link to='/shelves' className='dash-tile'>Move Books</Link>
          </div>
          <div className='dash-outer medium-4 columns'>
            <Link to='/books/search' className='dash-tile'>Search Books</Link>
          </div>
          <div className='dash-outer medium-4 columns'>
            <Link to='#' className='dash-tile'>Thing Two</Link>
          </div>
          <div className='dash-outer medium-4 columns'>
            <Link to='/cases/new' className='dash-tile'>Build Bookcase</Link>
          </div>
          <div className='dash-outer medium-4 columns'>
            <Link to='/cases' className='dash-tile'>See Bookcases</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default DashHomePage
