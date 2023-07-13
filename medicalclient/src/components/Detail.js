import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useLocation ,useNavigate } from "react-router-dom";


export default function Detail() {
	

	const location = useLocation(); // Utilisez useLocation() pour obtenir l'objet location
	const navigate = useNavigate();
	// Assurez-vous que location.state existe avant d'accéder à ses propriétés
	if (!location.state) {
	  return <div>No data available</div>;
	}
	const { doctor } = location.state;
	
	const handleBookNow = () => {
		navigate('/booking', { state: { doctor} });
	  };
  return (
    <div className="App">
    <div className="content">

    <header className="header_sticky">
        <div className="container">
        <Navbar/>
        </div>
    </header>  

    <main>
		<div id="breadcrumb">
			<div className="container">
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">Category</a></li>
					<li>Page active</li>
				</ul>
			</div>
		</div>
		

		<div className="container margin_60">
			<div className="row">
				<div className="col-xl-8 col-lg-8">
					<nav id="secondary_nav">
						<div className="container">
							<ul className="clearfix">
								<li><a href="#section_1" className="active">General info</a></li>
								<li><a href="#section_2">Reviews</a></li>
								<li><a href="#sidebar">Booking</a></li>
							</ul>
						</div>
					</nav>
					<div id="section_1">
						<div className="box_general_3">
							<div className="profile">
								<div className="row">
									<div className="col-lg-5 col-md-4">
										<figure>
											<img src={require(`../img/doctors/${doctor.id}.jpg`)} alt="" className="img-fluid"/>
										</figure>
									</div>
									<div className="col-lg-7 col-md-8">
										<small>{doctor.specialite}</small>
										<h1>{doctor.firstName} {doctor.lastName}</h1>
										<span className="rating">
											<i className="icon_star voted"></i>
											<i className="icon_star voted"></i>
											<i className="icon_star voted"></i>
											<i className="icon_star voted"></i>
											<i className="icon_star"></i>
											<small>(145)</small>
											<a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1">
												<img src="img/badges/badge_1.svg" width="15" height="15" alt=""/>
											</a>
										</span>
										<ul className="statistic">
											<li>854 Views</li>
											<li>124 Patients</li>
										</ul>
										<ul className="contacts">
											<li>
												<h6>Address</h6>
												{doctor.adress}  
												
											</li>
											<li>
												<h6>Cabinet :</h6> {doctor.workingCabinet}</li>
										</ul>
									</div>
								</div>
							</div>
							
							<hr/>
							
							
							<div className="indent_title_in">
								<i className="pe-7s-user"></i>
								<h3>Professional statement</h3>
								<p>Mussum ipsum cacilds, vidis litro abertis.</p>
							</div>
							<div className="wrapper_indent">
								<p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Nullam mollis. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapi.</p>
								<h6>Specializations</h6>
								<div className="row">
									<div className="col-lg-6">
										<ul className="bullets">
											<li>Abdominal Radiology</li>
											<li>Addiction Psychiatry</li>
											<li>Adolescent Medicine</li>
											<li>Cardiothoracic Radiology </li>
										</ul>
									</div>
									<div className="col-lg-6">
										<ul className="bullets">
											<li>Abdominal Radiology</li>
											<li>Addiction Psychiatry</li>
											<li>Adolescent Medicine</li>
											<li>Cardiothoracic Radiology </li>
										</ul>
									</div>
								</div>
								
							</div>
						

							<hr/>

							<div className="indent_title_in">
								<i className="pe-7s-news-paper"></i>
								<h3>Education</h3>
								<p>Mussum ipsum cacilds, vidis litro abertis.</p>
							</div>
							<div className="wrapper_indent">
								<p>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Nullam mollis. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapi.</p>
								<h6>Curriculum</h6>
								<ul className="list_edu">
									<li><strong>New York Medical College</strong> - Doctor of Medicine</li>
									<li><strong>Montefiore Medical Center</strong> - Residency in Internal Medicine</li>
									<li><strong>New York Medical College</strong> - Master Internal Medicine</li>
								</ul>
							</div>
							

							<hr/>

							<div className="indent_title_in">
								<i className="pe-7s-cash"></i>
								<h3>Prices &amp; Payments</h3>
								<p>Mussum ipsum cacilds, vidis litro abertis.</p>
							</div>
							<div className="wrapper_indent">
								<p>Zril causae ancillae sit ea. Dicam veritus mediocritatem sea ex, nec id agam eius. Te pri facete latine salutandi, scripta mediocrem et sed, cum ne mundi vulputate. Ne his sint graeco detraxit, posse exerci volutpat has in.</p>
								<div className="table-responsive">
								<table className="table table-striped">
									<thead>
										<tr>
											<th>Service - Visit</th>
											<th>Price</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>New patient visit</td>
											<td>$34</td>
										</tr>
										<tr>
											<td>General consultation</td>
											<td>$60</td>
										</tr>
										<tr>
											<td>Back Pain</td>
											<td>$40</td>
										</tr>
										<tr>
											<td>Diabetes Consultation</td>
											<td>$55</td>
										</tr>
										<tr>
											<td>Eating disorder</td>
											<td>$60</td>
										</tr>
										<tr>
											<td>Foot Pain</td>
											<td>$35</td>
										</tr>
									</tbody>
								</table>
								</div>
							</div>
							
						</div>
						
					</div>
					

					<div id="section_2">
						<div className="box_general_3">
							<div className="reviews-container">
								<div className="row">
									<div className="col-lg-3">
										<div id="review_summary">
											<strong>4.7</strong>
											<div className="rating">
												<i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
											</div>
											<small>Based on 4 reviews</small>
										</div>
									</div>
									<div className="col-lg-9">
										<div className="row">
											<div className="col-lg-10 col-9">
												<div className="progress">
													<div className="progress-bar" role="progressbar" style={{width:" 90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className="col-lg-2 col-3"><small><strong>5 stars</strong></small></div>
										</div>
										
										<div className="row">
											<div className="col-lg-10 col-9">
												<div className="progress">
													<div className="progress-bar" role="progressbar" style = {{width: "95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className="col-lg-2 col-3"><small><strong>4 stars</strong></small></div>
										</div>
										
										<div className="row">
											<div className="col-lg-10 col-9">
												<div className="progress">
													<div className="progress-bar" role="progressbar" style= {{width:"60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className="col-lg-2 col-3"><small><strong>3 stars</strong></small></div>
										</div>
										
										<div className="row">
											<div className="col-lg-10 col-9">
												<div className="progress">
													<div className="progress-bar" role="progressbar" style={{width: "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className="col-lg-2 col-3"><small><strong>2 stars</strong></small></div>
										</div>
										
										<div className="row">
											<div className="col-lg-10 col-9">
												<div className="progress">
													<div className="progress-bar" role="progressbar" style={{width: "0"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className="col-lg-2 col-3"><small><strong>1 stars</strong></small></div>
										</div>
										
									</div>
								</div>
								

								<hr/>

								<div className="review-box clearfix">
									<figure className="rev-thumb"><img src="http://via.placeholder.com/150x150.jpg" alt=""/>
									</figure>
									<div className="rev-content">
										<div className="rating">
											<i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
										</div>
										<div className="rev-info">
											Admin – April 03, 2016:
										</div>
										<div className="rev-text">
											<p>
												Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
											</p>
										</div>
									</div>
								</div>
								

								<div className="review-box clearfix">
									<figure className="rev-thumb"><img src="http://via.placeholder.com/150x150.jpg" alt=""/>
									</figure>
									<div className="rev-content">
										<div className="rating">
											<i className="icon-star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
										</div>
										<div className="rev-info">
											Ahsan – April 01, 2016
										</div>
										<div className="rev-text">
											<p>
												Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
											</p>
										</div>
									</div>
								</div>
								

								<div className="review-box clearfix">
									<figure className="rev-thumb"><img src="http://via.placeholder.com/150x150.jpg" alt=""/>
									</figure>
									<div className="rev-content">
										<div className="rating">
											<i className="icon-star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
										</div>
										<div className="rev-info">
											Sara – March 31, 2016
										</div>
										<div className="rev-text">
											<p>
												Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
											</p>
										</div>
									</div>
								</div>
							
							</div>
							
							<hr/>
							<div className="text-right"><a href="submit-review.html" className="btn_1">Submit review</a></div>
						</div>
					</div>
					
				</div>
			
				<aside className="col-xl-4 col-lg-4" id="sidebar">
					<div className="box_general_3 booking">
						<form>
							<div className="title">
							<h3>Book a Visit</h3>
							<small>Monday to Friday 09.00am-06.00pm</small>
							</div>
							<div className="row">
								<div className="col-6">
									<div className="form-group">
										<input className="form-control" type="text" id="booking_date" data-lang="en" data-min-year="2017" data-max-year="2020" data-disabled-days="10/17/2017,11/18/2017"/>
									</div>
								</div>
								<div className="col-6">
									<div className="form-group">
										<input className="form-control" type="text" id="booking_time" value="9:00 am"/>
									</div>
								</div>
							</div>
							
							<ul className="treatments clearfix">
								<li>
									<div className="checkbox">
										<input type="checkbox" className="css-checkbox" id="visit1" name="visit1"/>
										<label for="visit1" className="css-label">Back Pain visit <strong>$55</strong></label>
									</div>
								</li>
								<li>
									<div className="checkbox">
										<input type="checkbox" className="css-checkbox" id="visit2" name="visit2"/>
										<label for="visit2" className="css-label">Cardiovascular screen <strong>$55</strong></label>
									</div>
								</li>
								<li>
									<div className="checkbox">
										<input type="checkbox" className="css-checkbox" id="visit3" name="visit3"/>
										<label for="visit3" className="css-label">Diabetes consultation <strong>$55</strong></label>
									</div>
								</li>
								<li>
									<div className="checkbox">
										<input type="checkbox" className="css-checkbox" id="visit4" name="visit4"/>
										<label for="visit4" className="css-label">General visit <strong>$55</strong></label>
									</div>
								</li>
							</ul>
							<hr/>
							<button className="btn_1 full-width" onClick={handleBookNow}>
							Book Now
							</button>
						</form>
					</div>
					
				</aside>
				
			</div>
			
		</div>
		
	</main>

    <Footer/>


<div id="toTop"></div>
</div>
</div>
  )
}
