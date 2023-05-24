import React from 'react';

export default function SpecialityCard({ speciality }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="box_list home">
        <a href="#0" data-toggle="tooltip" data-placement="top" title="Add to wishlist" className="wish_bt"></a>
        <figure>
          <a href="detail-page.html">
            <img src={require(`../img/speciality/1.jpg`)} className="img-fluid" alt="" />
          </a>
          <div className="preview">
            <span>Read more</span>
          </div>
        </figure>
        <div className="wrapper">
        <p>Specialite : </p>   
          <h3>
          {speciality.map((spec, index) => (
            <p key={index}>{spec}</p>
          ))}
          </h3>
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
            <a href="detail-page.html">Book now</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
