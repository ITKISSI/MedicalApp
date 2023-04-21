import { Link } from "react-router-dom";
const FooterLinks = () => {
    return (    
       <div className="col-lg-3 col-md-4">
    <h5>About</h5>
    <ul className="links">
      <li><a href="#0">About us</a></li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="#0">FAQ</a></li>
      <li><Link to = "/login">Login</Link></li>
      <li><a href="register.html">Register</a></li>
    </ul>
  </div>
  );
}
 
export default FooterLinks;