import React from 'react'
import { Link } from 'react-router'
import Topbar from './Topbar'

const Layout = (props) => {
  return(
    <div>
      <div className="contain-to-grid full-top-bar sticky">
        <Topbar />
      </div>
      {props.children}
    </div>
  )
}

export default Layout;
