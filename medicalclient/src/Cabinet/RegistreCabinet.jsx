import { useState } from "react";
import Footer from "../adminComponents/Footer";
import Navbar from "../adminComponents/Navbar";
import GoogleMapComponent from "../components/GoogleMapComponent";

const RegistreCabinet = () => {
    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);
  return (
    <div className="App">
      <div className="content">
        <main>
          <div class="container margin_60_35">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="box_general_3 write_review">
                  <h1>Registre a cabinet</h1>

                  <div class="form-group">
                    <label>denomination</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="denomination"
                    />
                  </div>
                  <div class="form-group">
                    <label>adresse</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="adresse"
                    />
                  </div>
                  <div class="form-group">
                    <label>telephone</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="telephone"
                    />
                  </div>
                  <div class="form-group">
                    <label>Localisations</label>
                    <GoogleMapComponent
                      isFromViewLocalisation={false}
                      longitude={longitude}
                      latitude={latitude}
                      setLongitude={setLongitude}
                      setLatitude={setLatitude}
                    />
                  </div>
                  <a href="#0" class="btn_1">
                    Submit review
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />

        <div id="toTop"></div>
      </div>
    </div>
  );
};

export default RegistreCabinet;
