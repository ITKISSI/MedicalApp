import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Confirm() {
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
		

		<div class="container margin_120">
			<div class="row justify-content-center">
				<div class="col-lg-8">
					<div id="confirm">
						<div class="icon icon--order-success svg add_bottom_15">
							<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72">
								<g fill="none" stroke="#8EC343" stroke-width="2">
									<circle cx="36" cy="36" r="35" style={{strokeDasharray:"240px, 240px" , strokeDashoffset : "480px"}}></circle>
									<path d="M17.417,37.778l9.93,9.909l25.444-25.393" style={{strokeDasharray:"50px, 50px", strokeDashoffset: "0px"}}></path>
								</g>
							</svg>
						</div>
					<h2>Thanks for your booking!</h2>
					<p>You'll receive a confirmation email at mail@example.com</p>
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

export default Confirm