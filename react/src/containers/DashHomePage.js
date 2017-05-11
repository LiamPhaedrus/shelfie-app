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
          <div className='home-grid'>
            <div className='dash-outer medium-4 columns'>
              <div className='dash-tile'>
                <Link to='/books'>All Your Books</Link>
              </div>
            </div>
            <div className='dash-outer medium-4 columns'>
              <div className='dash-tile'>
                <Link to='/shelves'>Arrange Books</Link>
              </div>
            </div>
            <div className='dash-outer medium-4 columns'>
              <div className='dash-tile'>
                <Link to='/books/search'>Search Books</Link>
            </div></div>
            <div className='dash-outer medium-4 columns'>
              <div className='dash-tile'>
                <Link to='#'>Add Books</Link>
              </div>
            </div>
            <div className='dash-outer medium-4 columns'>
              <div className='dash-tile'>
                <Link to='/cases'>See Bookcases</Link>
              </div>
            </div>
            <div className='dash-outer medium-4 columns'>
              <div className='dash-tile'>
                <Link to='/cases/new'>Build Bookcase</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DashHomePage
