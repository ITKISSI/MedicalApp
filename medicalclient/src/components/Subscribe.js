const Subscibe = (props) => {
    return ( 
        <div className="col-md-6 p-0">
        <div className="block_1">
          <figure><img src="./../public/assets/img/doctors_icon.svg" alt=""/></figure>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <a href="register-doctor.html" className="btn_1">Read more</a>
        </div>
      </div>
     );
}
 
export default Subscibe;
