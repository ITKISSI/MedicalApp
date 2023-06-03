import React from 'react';
import { useNavigate } from "react-router-dom";

export default function DoctorCard({ doctor }) {

  const navigate = useNavigate(); // Use useNavigate to navigate

  const handleBookNow = () => {
    navigate('/detail', { state: { doctor} });
  };

  return (
    <div className="col-lg-4 col-md-6">
      <div className="box_list home">
        <a href="#0" data-toggle="tooltip" data-placement="top" title="Add to wishlist" className="wish_bt"></a>
        <figure>
          <a href="detail-page.html">
            <img src={require(`../img/doctors/${doctor.id}.jpg`)} className="img-fluid" alt="" />
          </a>
          <div className="preview">
            <span>Read more</span>
          </div>
        </figure>
        <div className="wrapper">
          <small>{doctor.specialite}</small>
          <h3>
            {doctor.firstName} {doctor.lastName}
          </h3>
          <p>{doctor.workingCabinet}</p>
                  
          <span className="rating">
            <i className="icon_star voted"></i>
            <i className="icon_star voted"></i>
            <i className="icon_star voted"></i>
            <i className="icon_star"></i>
            <i className="icon_star"></i> <small>(145)</small>
          </span>
        </div>
        <ul>
          <li>
            <i className="icon-eye-7"></i>  Views
          </li>
          <li>
          <button style={{borderRadius: '10px' , width:'100px' , backgroundColor:'#E74E84'}} onClick={handleBookNow}>Book Now</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
