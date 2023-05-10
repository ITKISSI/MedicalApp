import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from "react-router-dom";

function Booking() {
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
			<div class="container">
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">Category</a></li>
					<li>Page active</li>
				</ul>
			</div>
		</div>
		

		<div class="container margin_60">
			<div class="row">
				<div class="col-xl-8 col-lg-8">
				<div class="box_general_3 cart">
					<div class="message">
						<p>Exisitng Customer? 
							<Link to="/loginPatient"  >Click here to login</Link>
						</p>
					</div>
					<div class="form_title">
						<h3><strong></strong>Your Details</h3>
						<p>
							Mussum ipsum cacilds, vidis litro abertis.
						</p>
					</div>
					<div class="step">
						<div class="row">
							<div class="col-md-6 col-sm-6">
								<div class="form-group">
									<label>First name</label>
									<input type="text" class="form-control" id="firstname_booking" name="firstname_booking" placeholder="Jhon"/>
								</div>
							</div>
							<div class="col-md-6 col-sm-6">
								<div class="form-group">
									<label>Last name</label>
									<input type="text" class="form-control" id="lastname_booking" name="lastname_booking" placeholder="Doe"/>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6 col-sm-6">
								<div class="form-group">
									<label>Email</label>
									<input type="email" id="email_booking" name="email_booking" class="form-control" placeholder="jhon@doe.com"/>
								</div>
							</div>
							<div class="col-md-6 col-sm-6">
								<div class="form-group">
									<label>Confirm email</label>
									<input type="email" id="email_booking_2" name="email_booking_2" class="form-control" placeholder="jhon@doe.com"/>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6 col-sm-6">
								<div class="form-group">
									<label>Telephone</label>
									<input type="text" id="telephone_booking" name="telephone_booking" class="form-control" placeholder="00 44 678 94329"/>
								</div>
							</div>
							<div class="col-md-6 col-sm-6">
								<div class="form-group">
									<label>Address</label>
									<input type="text" id="address_booking" name="address_booking" class="form-control" placeholder="abcd"/>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6 col-sm-6">
								<div class="form-group">
									<label>CIN</label>
									<input type="text" id="cin_booking" name="cin_booking" class="form-control" placeholder="F9887"/>
								</div>
							</div>
							<div class="col-md-6 col-sm-6">
								<div class="form-group">
									<label>Age</label>
									<input type="text" id="age_booking" name="age_booking" class="form-control" placeholder="F9887"/>
								</div>
							</div>
						</div>
					</div>
					<hr/>
					
				</div>
				</div>
				
				<aside class="col-xl-4 col-lg-4" id="sidebar">
					<div class="box_general_3 booking">
						<form>
							<div class="title">
								<h3>Your booking</h3>
							</div>
							<div class="summary">
								<ul>
									<li>Date: <strong class="float-right">11/12/2017</strong></li>
									<li>Time: <strong class="float-right">10.30 am</strong></li>
									<li>Dr. Name: <strong class="float-right">Dr. julia Jhones</strong></li>
									<li>Patient Full Name : <strong class="float-right">Jhon Doe</strong></li>
								</ul>
							</div>
							<hr/>
							<Link to="/confirm" class="btn_1 full-width" >Confirm</Link>
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

export default Booking