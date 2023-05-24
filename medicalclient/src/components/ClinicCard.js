import React from 'react';

export default function ClinicCard({ cabinet }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="box_list home">
        <a href="#0" data-toggle="tooltip" data-placement="top" title="Add to wishlist" className="wish_bt"></a>
        <figure>
          <a href="detail-page.html">
            <img src={require(`../img/cabinets/${cabinet.id}.jpg`)} className="img-fluid" alt="" />
          </a>
          <div className="preview">
            <span>Read more</span>
          </div>
        </figure>
        <div className="wrapper">
        <small>
            {cabinet.city}
        </small>
        <h3>
            {cabinet.denomination} 
        </h3>
        <p>Tel : {cabinet.telephone} </p>
                
                  
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
