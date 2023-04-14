import React from 'react'
import { Link } from 'react-router-dom'

function SideNav() {
  return (
    <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard"> 
      <Link className="nav-link" to = "/">
        <i className="fa fa-fw fa-dashboard"></i>
        <span className="nav-link-text">Dashboard</span>
        </Link>
    </li>
    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
      <Link  className="nav-link " data-toggle="collapse" data-parent="#exampleAccordion" to = "/list">
      <i className="fa fa-fw fa-gear"></i>
      <span className="nav-link-text">Liste de rendez-vous</span>
      </Link>
    </li>
    
  </ul>
  
  )
}

export default SideNav