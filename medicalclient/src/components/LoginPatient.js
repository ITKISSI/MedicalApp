
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios';
import React, { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';

function LoginPatient() {

    let navigate=useNavigate();
    

    const [user, setUser] = useState({
        login: '',
        password: ''
      });
    
      const submit = async (e) => {
        e.preventDefault();
    
        
            await axios.post("http://localhost:8082/Authentication/login",user)
            .then(res=>{
                console.log(res.data);
                if(res.data.user===null && res.data.jwt===""){
                    toast.error("Login or password incorrect");
                }
                else if(res.data.user!==null && res.data.jwt===""){
                    toast.error("Account is disabled");
                }
                else if(res.data.user!==null && res.data.jwt!==""){
                    toast.success("Welcome ");
                    console.log(res.data);
                    console.log(res.data.user.firstName);
                    
                    setTimeout(() => {
                        navigate("/admin");
                      }, 4000);
                }
                
            })
              
            }
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
                <h1 style={{color :"white !impotant" }}>Please login!</h1>
                <form onSubmit={submit}>
                    <div className="box_form clearfix">
                        <div className="box_login">
    
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your login" value={user.login} onChange={(event) => setUser({ ...user, [event.target.name]: event.target.value })} required id="username" name="login" />
                            </div>
                            
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Your password" value={user.password} onChange={(event) => setUser({ ...user, [event.target.name]: event.target.value })} required id="password" name="password"/>
                            </div>
                            
                            <div className="form-group">
                                <input className="btn_1"type="submit" value={"Submit"}/>
                            </div>
                        </div>

                        <div className="box_login last">
    
                            <div className="form-group">
                                <br/>
                            </div>

                            <div className="form-group">
                            </div>
                        
                            <div className="form-group">
                                <p className="text-center link_bright">You do not have an account yet? <a href="#0"><strong>Register now!</strong></a></p>
                            </div>
                            
                            
                        </div>
                    </div>
                </form>
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