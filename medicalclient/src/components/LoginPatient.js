
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios';
import React, { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';

function LoginPatient() {

    let navigate=useNavigate();
    

    const [formData, setFormData] = useState({
        username: '',
        password: ''
      });
    
      const submit = async (e) => {
        e.preventDefault();
    
        try {
    
            await axios.post("http://localhost:8081/auth/login",formData)
            .then(res=>{
                if(res.data.user===null && res.data.jwt===""){
                    toast.error("Paasord or Username incorrect");
                }
                else if(res.data.user===null && res.data.jwt!=="")
                {
                    toast.error(res.data.jwt);
                }
                else if(res.data.user!==null && res.data.jwt!==""){
                    toast.success("Hello "+res.data.user.username)
                    setTimeout(() => {
                        navigate("/");
                      }, 4000);
                }
                
            })
              
            }catch(e){
                toast.error("not Successfully logged")
            }}
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
    <div className="bg_color_2">
        <div className="container margin_60_35">
            <div id="login-2">
                <h1 style={{color : 'white !important' }}>Please login to Findoctor!</h1>
                <form method='/login' action="POST" onSubmit={submit}>
                    <div className="box_form clearfix">
                        <div className="box_login">
                            <a href="#0" className="social_bt facebook">Login with Facebook</a>
                            <a href="#0" className="social_bt google">Login with Google</a>
                            <a href="#0" className="social_bt linkedin">Login with Linkedin</a>
                        </div>
                        <div className="box_login last">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your username address" value={formData.username} onChange={(event) => setFormData({ ...formData, [event.target.name]: event.target.value })} required  id="username" name="username"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Your password" value={formData.password} onChange={(event) => setFormData({ ...formData, [event.target.name]: event.target.value })} required id="password" name="password"/>
                                <a href="#0" className="forgot"><small>Forgot password?</small></a>
                            </div>
                            <div className="form-group">
                                <input className="btn_1"type="submit" value={"Submit"}/>
                            </div>
                        </div>
                    </div>
                </form>
                <p className="text-center link_bright">Do not have an account yet? <a href="#0"><strong>Register now!</strong></a></p>
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

export default LoginPatient