import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function SubmitReview() {
  return (

    <div className="App">
    <div className="content">

    <header className="header_sticky">
        <div className="container">
        <Navbar/>
        </div>
    </header>  

    <main>
    <div id="breadcrumb">
        <div class="container">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Category</a></li>
                <li>Page active</li>
            </ul>
        </div>
    </div>
    

    <div class="container margin_60_35">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="box_general_3 write_review">
                    <h1>Write a review for Dr. Julia Smooths</h1>
                    <div class="rating_submit">
                        <div class="form-group">
                        <label class="d-block">Overall rating</label>
                        <span class="rating">
                            <input type="radio" class="rating-input" id="5_star" name="rating-input" value="5 Stars"/><label for="5_star" class="rating-star"></label>
                            <input type="radio" class="rating-input" id="4_star" name="rating-input" value="4 Stars"/><label for="4_star" class="rating-star"></label>
                            <input type="radio" class="rating-input" id="3_star" name="rating-input" value="3 Stars"/><label for="3_star" class="rating-star"></label>
                            <input type="radio" class="rating-input" id="2_star" name="rating-input" value="2 Stars"/><label for="2_star" class="rating-star"></label>
                            <input type="radio" class="rating-input" id="1_star" name="rating-input" value="1 Star"/><label for="1_star" class="rating-star"></label>
                        </span>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label>Title of your review</label>
                        <input class="form-control" type="text" placeholder="If you could say it in one sentence, what would you say?"/>
                    </div>
                    <div class="form-group">
                        <label>Your review</label>
                        <textarea class="form-control" style={{height: "180px"}} placeholder="Write your review here ..."></textarea>
                    </div>
                    <div class="form-group">
                        <label>Add your photo (optional)</label>
                        <div class="fileupload"><input type="file" name="fileupload" accept="image/*"/></div>
                    </div>
                    <hr/>
                    <div class="form-group">
                        <div class="checkboxes add_bottom_30 add_top_15">
                            <label class="container_check">I accept <a href="#0">terms and conditions and general policy</a>
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <a href="#0" class="btn_1">Submit review</a>
                </div>
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

export default SubmitReview