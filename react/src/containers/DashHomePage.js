import React, { Component }  from 'react';
import { Link } from 'react-router';

class DashHomePage extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return(
      <div className="home-react">
        <h1><span>Shelfie</span></h1>
        <div className='row'>
          <div className='home-grid'>
            <div className='dash-outer medium-4 xlarge-2 columns'>
              <Link to='/books' className='dash-tile' id='dash-allbooks'>
                All Your Books
              </Link>
            </div>
            <div className='dash-outer medium-4 xlarge-2 columns'>
              <Link to='/shelves' className='dash-tile'>
                Arrange Books
              </Link>
            </div>
            <div className='dash-outer medium-4 xlarge-2 columns'>
              <Link to='/books/search' className='dash-tile'>
                Search Books
              </Link>
            </div>
            <div className='dash-outer medium-4 xlarge-2 columns'>
              <Link to='#' className='dash-tile'>
                Add Books
              </Link>
            </div>
            <div className='dash-outer medium-4 xlarge-2 columns'>
              <Link to='/cases' className='dash-tile'>
                See Bookcases
              </Link>
            </div>
            <div className='dash-outer medium-4 xlarge-2 columns'>
              <Link to='/cases/new' className='dash-tile'>
                Build Bookcase
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DashHomePage
