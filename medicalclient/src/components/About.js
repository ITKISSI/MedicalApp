import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About() {
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
		

		<div class="bg_color_1">
			<div class="container margin_120_95">
				<div class="main_title">
					<h1>About Findoctor</h1>
					<p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
				</div>
				<div class="row justify-content-between">
					<div class="col-lg-6">
						<figure class="add_bottom_30">
							<img src="http://via.placeholder.com/800x450.jpg" class="img-fluid" alt=""/>
						</figure>
					</div>
					<div class="col-lg-5">
						<p>Lorem ipsum dolor sit amet, homero erroribus in cum. Cu eos <strong>scaevola
								probatus</strong>. Nam atqui intellegat ei, sed ex graece essent delectus. Autem consul
							eum ea. Duo cu fabulas nonumes contentiones, nihil voluptaria pro id. Has graeci
							deterruisset ad, est no primis detracto pertinax, at cum malis vitae facilisis.</p>
						<p>Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates
							neglegentur. Eam id legimus torquatos cotidieque, usu decore <strong>percipitur
								definitiones</strong> ex, nihil utinam recusabo mel no. Dolores reprehendunt no sit, quo
							cu viris theophrastus. Sit unum efficiendi cu.</p>
						<p><em>CEO Marc Schumaker</em></p>
					</div>
				</div>
			
			</div>
			
		</div>
	

		<div class="container margin_120_95">
			<div class="main_title">
				<h2>Our founders</h2>
				<p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
			</div>
			<div id="staff" class="owl-carousel owl-theme">
				<div class="item">
					<a href="detail-page.html">
						<div class="title">
							<h4>Julia Holmes<em>CEO</em></h4>
						</div><img src="http://via.placeholder.com/350x500.jpg" alt=""/>
					</a>
				</div>
				<div class="item">
					<a href="detail-page.html">
						<div class="title">
							<h4>Lucas Smith<em>Marketing</em></h4>
						</div><img src="http://via.placeholder.com/350x500.jpg" alt=""/>
					</a>
				</div>
				<div class="item">
					<a href="detail-page.html">
						<div class="title">
							<h4>Paul Stephens<em>Business strategist</em></h4>
						</div><img src="http://via.placeholder.com/350x500.jpg" alt=""/>
					</a>
				</div>
				<div class="item">
					<a href="detail-page.html">
						<div class="title">
							<h4>Pablo Himenez<em>Customer Service</em></h4>
						</div><img src="http://via.placeholder.com/350x500.jpg" alt=""/>
					</a>
				</div>
				<div class="item">
					<a href="detail-page.html">
						<div class="title">
							<h4>Andrew Stuttgart<em>Admissions</em></h4>
						</div><img src="http://via.placeholder.com/350x500.jpg" alt=""/>
					</a>
				</div>
			</div>

		</div>


		<div class="bg_color_1">
			<div class="container margin_120_95">
				<div class="main_title">
					<h2>What user says about us</h2>
					<p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
				</div>
				<div class="row">
					<div class="col-md-4">
						<div class="about-review">
							<div class="rating">
								<i class="icon_star voted"></i><i class="icon_star voted"></i><i
									class="icon_star voted"></i><i class="icon_star voted"></i><i
									class="icon_star voted"></i> <strong>Excellent!</strong>
							</div>
							<p>"Vel esse mucius omittantur ei. Nostrum fabellas similique ex qui, dolor semper mentitum
								ut est, ea nec mutat vocent. Animal commodo in quo, et nec zril dolor homero. Meis
								graece ad pro, mea simul discere no."</p>
							<div class="user_review">
								<figure><img src="http://via.placeholder.com/160x160.jpg"/></figure>
								<h4>Dr. Joseph Luiss<span>Doctor</span></h4>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="about-review">
							<div class="rating">
								<i class="icon_star voted"></i><i class="icon_star voted"></i><i
									class="icon_star voted"></i><i class="icon_star voted"></i><i
									class="icon_star voted"></i> <strong>Superb!</strong>
							</div>
							<p>"Ad agam dignissim has, posse melius dissentiet eam eu. Vel accusamus instructior ex, his
								ne omnes commodo efficiantur. Duo quod inani maluisset te, ea per alia minimum
								officiis."</p>
							<div class="user_review">
								<figure><img src="http://via.placeholder.com/160x160.jpg"/></figure>
								<h4>Pablo Jemenez<span>User</span></h4>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="about-review">
							<div class="rating">
								<i class="icon_star voted"></i><i class="icon_star voted"></i><i
									class="icon_star voted"></i><i class="icon_star voted"></i><i
									class="icon_star voted"></i> <strong>Very useful!</strong>
							</div>
							<p>"Duo omnis iudicabit quaerendum ut. Ius quis adipiscing ut. Id mea graeco fabulas. Pri
								iisque interpretaris at, per diam suscipiantur in, ut ludus labore iriure pro."</p>
							<div class="user_review">
								<figure><img src="http://via.placeholder.com/160x160.jpg"/></figure>
								<h4>Marc Twain<span>User</span></h4>
							</div>
						</div>
					</div>
				</div>
				
				<div class="row">
					<div class="col-md-4">
						<div class="about-review">
							<div class="rating">
								<i class="icon_star voted"></i><i class="icon_star voted"></i><i
									class="icon_star voted"></i><i class="icon_star voted"></i><i
									class="icon_star voted"></i> <strong>Satisfied!</strong>
							</div>
							<p>"Elitr doming consetetur ut has, noluisse interesset te vis. Nemore habemus mea at, has
								no probo mucius omittam. Scripta numquam eruditi ad pri, quo docendi vivendum ea. "</p>
							<div class="user_review">
								<figure><img src="http://via.placeholder.com/160x160.jpg"/></figure>
								<h4>Dr. Julia Roberts<span>Doctor</span></h4>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="about-review">
							<div class="rating">
								<i class="icon_star voted"></i><i class="icon_star voted"></i><i
									class="icon_star voted"></i><i class="icon_star voted"></i><i
									class="icon_star voted"></i> <strong>Love it!</strong>
							</div>
							<p>"Unum justo sea ne, no facer intellegat vituperatoribus duo, vix an meliore expetendis.
								Ei pro liber regione consulatu. Est soleat molestie ad. Oblique oportere pertinacia eum
								ne."</p>
							<div class="user_review">
								<figure><img src="http://via.placeholder.com/160x160.jpg"/></figure>
								<h4>Dr.John Doe<span>Doctor</span></h4>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="about-review">
							<div class="rating">
								<i class="icon_star voted"></i><i class="icon_star voted"></i><i
									class="icon_star voted"></i><i class="icon_star voted"></i><i
									class="icon_star voted"></i> <strong>Great Support!</strong>
							</div>
							<p>"Lorem ipsum dolor sit amet, ne quas inermis nec, graece postea in nec. Eum propriae
								eligendi intellegam eu. Ius ei tation intellegat."</p>
							<div class="user_review">
								<figure><img src="http://via.placeholder.com/160x160.jpg"/></figure>
								<h4>Lucas<span>User</span></h4>
							</div>
						</div>
					</div>
				</div>
				
			</div>
			
		</div>
	

		<div class="container margin_120_95">
			<div class="main_title">
				<h2>Why Choose Findoctor</h2>
				<p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
			</div>
			<div class="row">
				<div class="col-lg-4 col-md-6">
					<a class="box_feat_about" href="#0">
						<i class="pe-7s-id"></i>
						<h3>+ 5575 Doctors</h3>
						<p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no
							alii option, cu sit mazim libris.</p>
					</a>
				</div>
				<div class="col-lg-4 col-md-6">
					<a class="box_feat_about" href="#0">
						<i class="pe-7s-help2"></i>
						<h3>H24 Support</h3>
						<p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no
							alii option, cu sit mazim libris. </p>
					</a>
				</div>
				<div class="col-lg-4 col-md-6">
					<a class="box_feat_about" href="#0">
						<i class="pe-7s-date"></i>
						<h3>Instant Booking</h3>
						<p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no
							alii option, cu sit mazim libris.</p>
					</a>
				</div>
				<div class="col-lg-4 col-md-6">
					<a class="box_feat_about" href="#0">
						<i class="pe-7s-headphones"></i>
						<h3>Help Direct Line</h3>
						<p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no
							alii option, cu sit mazim libris. </p>
					</a>
				</div>
				<div class="col-lg-4 col-md-6">
					<a class="box_feat_about" href="#0">
						<i class="pe-7s-credit"></i>
						<h3>Secure Payments</h3>
						<p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no
							alii option, cu sit mazim libris.</p>
					</a>
				</div>
				<div class="col-lg-4 col-md-6">
					<a class="box_feat_about" href="#0">
						<i class="pe-7s-chat"></i>
						<h3>Support via Chat</h3>
						<p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no
							alii option, cu sit mazim libris. </p>
					</a>
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

export default About