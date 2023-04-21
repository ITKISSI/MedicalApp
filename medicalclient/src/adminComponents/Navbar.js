import React from 'react'
import SideNav from './SideNav'
import HeadNav from './HeadNav'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-default fixed-top" id="mainNav">
      <Link className="navbar-brand" to = "/">
          <img src="./admin assets/img/logo.png" data-retina="true" alt="" width="163" height="36"/>
      </Link>

    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
    <SideNav />
      <ul className="navbar-nav sidenav-toggler">
        <li className="nav-item">
          <a className="nav-link text-center" id="sidenavToggler">
            <i className="fa fa-fw fa-angle-left"></i>
          </a>
        </li>
      </ul>
      <HeadNav />
    </div>
  </nav>
  )
}

export default Navbar