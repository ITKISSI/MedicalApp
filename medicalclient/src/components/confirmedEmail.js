
import Navbar from './Navbar'
import Footer from './Footer'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';

function ConfirmedEmail() {

    let navigate=useNavigate();

      
    toast.success("Email has been confirmed")
    setTimeout(() => {
        navigate("/login");
        }, 4000);

               
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
        
    </main>
    <Footer/>
          <div id="toTop">

          </div>
    </div>
    </div>
   
      
  )
}

export default ConfirmedEmail