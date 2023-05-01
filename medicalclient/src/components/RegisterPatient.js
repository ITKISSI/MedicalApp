import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function RegisterPatient() {
  return (

    <div className="App">
    <div className="content">

    <header className="header_sticky">
        <div className="container">
        <Navbar/>
        </div>
    </header>    

    <main>
		<div id="hero_register">
			<div class="container margin_120_95">
				<div class="row">
					<div class="col-lg-6">
						<h1>It's time to find you!</h1>
						<p class="lead">Te pri adhuc simul. No eros errem mea. Diam mandamus has ad. Invenire senserit
							ad has, has ei quis iudico, ad mei nonumes periculis.</p>
						<div class="box_feat_2">
							<i class="pe-7s-map-2"></i>
							<h3>Let patients to Find you!</h3>
							<p>Ut nam graece accumsan cotidieque. Has voluptua vivendum accusamus cu. Ut per assueverit
								temporibus dissentiet.</p>
						</div>
						<div class="box_feat_2">
							<i class="pe-7s-date"></i>
							<h3>Easly manage Bookings</h3>
							<p>Has voluptua vivendum accusamus cu. Ut per assueverit temporibus dissentiet. Eum no atqui
								putant democritum, velit nusquam sententiae vis no.</p>
						</div>
						<div class="box_feat_2">
							<i class="pe-7s-phone"></i>
							<h3>Instantly via Mobile</h3>
							<p>Eos eu epicuri eleifend suavitate, te primis placerat suavitate his. Nam ut dico
								intellegat reprehendunt, everti audiam diceret in pri, id has clita consequat
								suscipiantur.</p>
						</div>
					</div>
					
					<div class="col-lg-5 ml-auto">
						<div class="box_form">
							<form>
								<div class="row">
									<div class="col-md-6 ">
										<div class="form-group">
											<input type="text" class="form-control" placeholder="First Name"/>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<input type="text" class="form-control" placeholder="Last Name"/>
										</div>
									</div>
								</div>
								
								<div class="row">
									<div class="col-lg-12">
										<div class="form-group">
											<input type="text" class="form-control" placeholder="Username"/>
										</div>
									</div>
								</div>
								

								<div class="row">
									<div class="col-lg-12">
										<div class="form-group">
											<input text="email" class="form-control" placeholder="phone"/>
										</div>
									</div>
								</div>
								
								<div class="row">
									<div class="col-lg-12">
										<div class="form-group">
											<input type="email" class="form-control" placeholder="Email Address"/>
										</div>
									</div>
								</div>

								<div class="row">
									<div class="col-lg-12">
										<div class="form-group">
											<input type="password" class="form-control" placeholder="password"/>
										</div>
									</div>
								</div>

								<div class="row">
									<div class="col-lg-12">
										<div class="form-group">
											<input type="password" class="form-control" placeholder="password confirmation"/>
										</div>
									</div>
								</div>
								
								<p class="text-center add_top_30"><input type="submit" class="btn_1" value="Submit"/></p>
								<div class="text-center"><small>Ut nam graece accumsan cotidieque. Has voluptua vivendum
										accusamus cu. Ut per assueverit temporibus dissentiet.</small></div>
							</form>
						</div>
						
					</div>
				
				</div>
				
			</div>
		
		</div>
		
	</main>

    <Footer/>


        <div id="toTop"></div>
</div>
</div>
  )
}

export default RegisterPatient