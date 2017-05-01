import React from 'react'
import { Link } from 'react-router'
import Topbar from './Topbar'

const Layout = (props) => {
  return(
    <div>
      <div className="contain-to-grid full-top-bar sticky">
        <Topbar />
      </div>
      <div className= "row columns">
        {props.children}
      </div>
    </div>
  )
}

export default Layout;
