import React from 'react';
import './Dashbord.css';
import Navbar from './adminComponents/Navbar';
import Footer from './adminComponents/Footer';

function dashbord() {
  return (
    <body className="fixed-nav sticky-footer" id="page-top">

  <Navbar />

  <div className="content-wrapper">
    <div className="container-fluid">

      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Dashboard</a>
        </li>
        <li className="breadcrumb-item active">My Dashboard</li>
      </ol>
	 
      <div className="row">
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card dashboard text-white bg-primary o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-envelope-open"></i>
              </div>
              <div className="mr-5"><h5>26 New Messages!</h5></div>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="messages.html">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card dashboard text-white bg-warning o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-star"></i>
              </div>
				<div className="mr-5"><h5>11 New Reviews!</h5></div>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="reviews.html">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card dashboard text-white bg-success o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-calendar-check-o"></i>
              </div>
              <div className="mr-5"><h5>10 New Bookings!</h5></div>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="bookings.html">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card dashboard text-white bg-danger o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-heart"></i>
              </div>
              <div className="mr-5"><h5>10 New Bookmarks!</h5></div>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="bookmarks.html">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
		</div>
		
		<h2></h2>
		<div className="box_general padding_bottom">
			<div className="header_box version_2">
				<h2><i className="fa fa-bar-chart"></i>Statistic</h2>
			</div>
		 <canvas id="myAreaChart" width="100%" height="30" ></canvas>
		</div>
	  </div>
	  
   	</div>
   
    <Footer />
   
    <a className="scroll-to-top rounded" href="#page-top">
      <i className="fa fa-angle-up"></i>
    </a>

    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
          <div className="modal-footer">
            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <a className="btn btn-primary" href="login.html">Logout</a>
          </div>
        </div>
      </div>
    </div>
    </body>
  )
}

export default dashbord