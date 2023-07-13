import React from 'react'
import { Link } from 'react-router-dom'

function SideNav() {
  return (
    <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard"> 
      <Link className="nav-link" to = "/admin">
        <i className="fa fa-fw fa-dashboard"></i>
        <span className="nav-link-text">Dashboard</span>
      </Link>
    </li>
    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
      <Link  className="nav-link " data-toggle="collapse" data-parent="#exampleAccordion" to = "/appointments">
      <i className="fa fa-fw fa-gear"></i>
      <span className="nav-link-text">Appointment list</span>
      </Link>
    </li>
    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
      <Link  className="nav-link " data-toggle="collapse" data-parent="#exampleAccordion" to = "/createMedcin">
      <i className="fa fa-fw fa-gear"></i>
      <span className="nav-link-text">Create a Doctor</span>
      </Link>
    </li>
    
    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
      <Link  className="nav-link " data-toggle="collapse" data-parent="#exampleAccordion" to = "/ListMedcin">
      <i className="fa fa-fw fa-gear"></i>
      <span className="nav-link-text">Doctor list</span>
      </Link>
    </li>

    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
      <Link  className="nav-link " data-toggle="collapse" data-parent="#exampleAccordion" to = "/createcabinet">
      <i className="fa fa-fw fa-gear"></i>
      <span className="nav-link-text">Create a Cabinet</span>
      </Link>
    </li>
    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
      <Link  className="nav-link " data-toggle="collapse" data-parent="#exampleAccordion" to = "/cabinets">
      <i className="fa fa-fw fa-gear"></i>
      <span className="nav-link-text">Cabinet list </span>
      </Link>
    </li>    
  </ul>
  
  )
}

export default SideNav