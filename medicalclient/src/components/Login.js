import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Login() {
  return (
    <div className="App">
    <div className="content">

    <header className="header_sticky">
        <div className="container">
        <Navbar/>
        </div>
    </header>

    <main>
    <div class="bg_color_2">
        <div class="container margin_60_35">
            <div id="login-2">
                <h1 style={{color : 'white !important' }}>Please login to Findoctor!</h1>
                <form>
                    <div class="box_form clearfix">
                        <div class="box_login">
                            <a href="#0" class="social_bt facebook">Login with Facebook</a>
                            <a href="#0" class="social_bt google">Login with Google</a>
                            <a href="#0" class="social_bt linkedin">Login with Linkedin</a>
                        </div>
                        <div class="box_login last">
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Your email address"/>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="Your password" name="password" id="password"/>
                                <a href="#0" class="forgot"><small>Forgot password?</small></a>
                            </div>
                            <div class="form-group">
                                <input class="btn_1" type="submit" value="Login"/>
                            </div>
                        </div>
                    </div>
                </form>
                <p class="text-center link_bright">Do not have an account yet? <a href="#0"><strong>Register now!</strong></a></p>
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

export default Login