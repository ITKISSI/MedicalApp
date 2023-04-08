const DoctorCard = () => {
    return (    <div class="col-lg-4 col-md-6">
    <div class="box_list home">
      <a href="#0" data-toggle="tooltip" data-placement="top" title="Add to wishlist" class="wish_bt"></a>
      <figure>

        <a href="detail-page.html"><img src="./../public/assets/http://via.placeholder.com/565x565.jpg" class="img-fluid" alt=""/></a>
        <div class="preview"><span>Read more</span></div>
      </figure>
      <div class="wrapper">
        <small>Psicologist</small>
        <h3>Dr. Watamaniuk</h3>
        <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....</p>
        <span class="rating"><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i><i class="icon_star"></i> <small>(145)</small></span>
        <a href="#0" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" class="badge_list_1"><img src="./../public/assets/img/badges/badge_1.svg" width="15" height="15" alt=""/></a>
      </div>
      <ul>
        <li><i class="icon-eye-7"></i> 854 Views</li>
        <li><a href="detail-page.html">Book now</a></li>
      </ul>
    </div>
  </div> );
}
 
export default DoctorCard;