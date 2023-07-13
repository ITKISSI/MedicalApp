import React from 'react'
import { Link } from 'react-router-dom'

function PatientSideNav() {
  return (
    <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
      <Link  className="nav-link " data-toggle="collapse" data-parent="#exampleAccordion" to = "/waitingLine">
      <i className="fa fa-fw fa-gear"></i>
      <span className="nav-link-text">Ma fille d'attente</span>
      </Link>
    </li>

    
  </ul>
  
  )
}

export default PatientSideNav