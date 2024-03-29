import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterPatient() {

	let navigate=useNavigate();
	
	const[patient,setPatient]=useState({
		firstname:"",
		lastname:"",
		phone:"",
		email:"",
		password:"",
		cpassword:""
	});

	const {firstname,lastname,phone,email,password,cpassword}=patient;

	const onInputChange=(e)=>{
		setPatient({...patient,[e.target.name]:e.target.value});
		
	}

	const onSubmit = async (e)=>{
		e.preventDefault();
		try{
			if(password !== cpassword) {
				toast.error("Passwords don't match");
			  }
			  else if (password.length < 6) {
				toast.error("Password must be atleast 6 characters");
		
			  }
			  else{
				await axios.post("http://localhost:8081/auth/register",patient)
				.then(res=>{

					if(res.data===false){
						toast.error("User Exists try login in!");
					}
					else{
						toast.success("A confirmation email has been sent to your inbox");
					}
						
			  })}
			  
		}catch(e){
			console.log(e);
		}
		
		
	
		
	};
	const onCancle = async (even) => {
        even.preventDefault();
        navigate("/");
    };



  return (

    <div className="App">
    <div className="content">

    <header className="header_sticky">
        <div className="container">
        <Navbar/>
        </div>
    </header>    
	<ToastContainer />
    <main>
		<div id="hero_register">
			<div className="container margin_120_95">
				<div className="row">
					<div className="col-lg-6">
					<h1 className="text-light"><span className="text-info">Register</span> to find your doctor with MEDISTA!</h1>
						<div className="box_feat_2">
							<i className="pe-7s-map-2"></i>
							<h3 className="text-info">Find your doctor!</h3>
							<p>Ut nam graece accumsan cotidieque. Has voluptua vivendum accusamus cu. Ut per assueverit
								temporibus dissentiet.</p>
						</div>
						<div className="box_feat_2">
							<i className="pe-7s-date"></i>
							<h3 className="text-info">Easly manage Bookings</h3>
							<p>Has voluptua vivendum accusamus cu. Ut per assueverit temporibus dissentiet. Eum no atqui
								putant democritum, velit nusquam sententiae vis no.</p>
						</div>
						<div className="box_feat_2">
							<i className="pe-7s-phone"></i>
							<h3 className="text-info">Instantly via Mobile</h3>
							<p>Eos eu epicuri eleifend suavitate, te primis placerat suavitate his. Nam ut dico
								intellegat reprehendunt, everti audiam diceret in pri, id has clita consequat
								suscipiantur.</p>
						</div>
					</div>
					<div className="col-lg-5 ml-auto">
						<div className="box_form">
							<form onSubmit={(e)=>onSubmit(e)}>
								<div className="row">
									<div className="col-md-6 ">
										<div className="form-group">
											<input type={"text"} 
											className="form-control" 
											placeholder="First Name"
											name="firstname"
											value={firstname}
											onChange={(e)=>onInputChange(e)}
											/>
										</div>
									</div>
									<div className="col-md-6 ">
										<div className="form-group">
											<input type={"text"} 
											className="form-control" 
											placeholder="Last Name"
											name="lastname"
											value={lastname}
											onChange={(e)=>onInputChange(e)}
											/>
										</div>
									</div>
								</div>
								

								<div className="row">
									<div className="col-lg-12">
										<div className="form-group">
											<input type={"text"} 
											className="form-control" 
											placeholder="Phone"
											name="phone"
											value={phone}
											onChange={(e)=>onInputChange(e)}
											/>
										</div>
									</div>
								</div>
								
								<div className="row">
									<div className="col-lg-12">
										<div className="form-group">
											<input type={"email"} 
											className="form-control" 
											placeholder="Email"
											name="email"
											value={email}
											onChange={(e)=>onInputChange(e)}
											/>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="col-lg-12">
										<div className="form-group">
											<input type={"password"} 
											className="form-control" 
											placeholder="Password"
											name="password"
											value={password}
											onChange={(e)=>onInputChange(e)}
											/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-12">
										<div className="form-group">
											<input type={"password"} 
											className="form-control" 
											placeholder="Password"
											name="cpassword"
											value={cpassword}
											onChange={(e)=>onInputChange(e)}
											/>
										</div>
									</div>
								</div>

								
								
								<p className="text-center add_top_30">
									<button type='submit' onSubmit={(e)=>onSubmit(e)} className='btn_1 mx-2'>Submit</button>
									<button type='reset' onClick={(e)=>onCancle(e)} className='btn_1 btn-info mx-2'>Cancel</button>
								</p>
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