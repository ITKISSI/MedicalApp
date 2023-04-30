import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
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
						<p>Exisitng Customer? <a href="#0">Click here to login</a></p>
					</div>
					<div class="form_title">
						<h3><strong>1</strong>Your Details</h3>
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
						</div>
					</div>
					<hr/>
					

					<div class="form_title">
						<h3><strong>2</strong>Payment Information</h3>
						<p>
							Mussum ipsum cacilds, vidis litro abertis.
						</p>
					</div>
					<div class="step">
						<div class="form-group">
							<label>Name on card</label>
							<input type="text" class="form-control" id="name_card_booking" name="name_card_booking" placeholder="Jhon Doe"/>
						</div>
						<div class="row">
							<div class="col-md-6">
								<div class="form-group">
									<label>Card number</label>
									<input type="text" id="card_number" name="card_number" class="form-control" placeholder="xxxx - xxxx - xxxx - xxxx"/>
								</div>
							</div>
							<div class="col-md-6 col-sm-6">
								<img src="../assets/img/payments.png" alt="Cards" class="cards"/>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6">
								<label>Expiration date</label>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<input type="text" id="expire_month" name="expire_month" class="form-control" placeholder="MM"/>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<input type="text" id="expire_year" name="expire_year" class="form-control" placeholder="Year"/>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label>Security code</label>
									<div class="row">
										<div class="col-md-4">
											<div class="form-group">
												<input type="text" id="ccv" name="ccv" class="form-control" placeholder="CCV"/>
											</div>
										</div>
										<div class="col-md-8">
											<img src="../assets/img/icon_ccv.gif" width="50" height="29" alt="ccv"/><small>Last 3 digits</small>
										</div>
									</div>
								</div>
							</div>
						</div>
						

						<h5>Or checkout with Paypal</h5>
						<p>
							Lorem ipsum dolor sit amet, vim id accusata sensibus, id ridens quaeque qui. Ne qui vocent ornatus molestie, reque fierent dissentiunt mel ea.
						</p>
						<p>
							<img src="../assets/img/paypal_bt.png" alt="Image"/>
						</p>
					</div>
					<hr/>
					

					<div class="form_title">
						<h3><strong>3</strong>Billing Address</h3>
						<p>
							Mussum ipsum cacilds, vidis litro abertis.
						</p>
					</div>
					<div class="step">
						<div class="row">
							<div class="col-md-6 col-sm-6">
								<label>Country</label>
								<div class="form-group">
									<select class="form-control" name="country" id="country">
										<option value="">Select your country</option>
										<option value="Europe">Europe</option>
										<option value="United states">United states</option>
										<option value="Asia">Asia</option>
									</select>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6 col-sm-6">
								<div class="form-group">
									<label>Street line 1</label>
									<input type="text" id="street_1" name="street_1" class="form-control" placeholder="Street line 1"/>
								</div>
							</div>
							<div class="col-md-6 col-sm-6">
								<div class="form-group">
									<label>Street line 2</label>
									<input type="text" id="street_2" name="street_2" class="form-control" placeholder="Street line 1"/>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6">
								<div class="form-group">
									<label>City</label>
									<input type="text" id="city_booking" name="city_booking" class="form-control" placeholder="Miami"/>
								</div>
							</div>
							<div class="col-md-3">
								<div class="form-group">
									<label>State</label>
									<input type="text" id="state_booking" name="state_booking" class="form-control" placeholder="Florida"/>
								</div>
							</div>
							<div class="col-md-3">
								<div class="form-group">
									<label>Postal code</label>
									<input type="text" id="postal_code" name="postal_code" class="form-control" placeholder="00342"/>
								</div>
							</div>
						</div>
						
					</div>
					<hr/>
					
					<div id="policy">
						<h4>Cancellation policy</h4>
						<div class="form-group">
							<div class="checkboxes">
								<label class="container_check">I accept <a href="#0">terms and conditions and general policy</a>
									<input type="checkbox"/>
									<span class="checkmark"></span>
								</label>
							</div>
						</div>
					</div>
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
								</ul>
							</div>
							<ul class="treatments checkout clearfix">
								<li>
									Back Pain visit <strong class="float-right">$55</strong>
								</li>
								<li>
									Cardiovascular screen <strong class="float-right">$55</strong>
								</li>
								<li class="total">
									Total <strong class="float-right">$110</strong>
								</li>
							</ul>
							<hr/>
							<a href="confirm.html" class="btn_1 full-width">Confirm and pay</a>
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