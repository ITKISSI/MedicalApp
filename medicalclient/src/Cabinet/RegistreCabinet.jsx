import { useState } from "react";
import Footer from "../adminComponents/Footer";
import GoogleMapComponent from "../components/GoogleMapComponent";
import axiosInstance from "../services/apiClient";
import { ToastContainer, toast } from "react-toastify";

const RegistreCabinet = () => {
  const [denomination, setDemonation] = useState("");
  const [adresse, setAdresse] = useState("");
  const [telephone, setTelephone] = useState("");
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = {};
    toast("Cabinet a été créé");


    if (!denomination)
      errors.denomination = "Denomination ne peut pas être vide";
    if (!adresse) errors.adresse = "adresse ne peut pas être vide";
    if (!telephone) errors.telephone = "telephone ne peut pas être vide";
    if (!longitude || !latitude)
      errors.Localisation = "ville ne peut pas être vide";
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      axiosInstance
        .post("/cabinet", {
          denomination,
          adresse,
          telephone,
          longitude,
          latitude,
        })
        .then((response) => {
          toast("Cabinet a été créé");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="App">
      <div className="content">
        <main>
          <div class="container margin_60_35">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="box_general_3 write_review">
                  <h1>Registre a cabinet</h1>

                  <form onSubmit={handleSubmit}>
                    <div class="form-group">
                      <label>denomination</label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="denomination"
                        value={denomination}
                        onChange={(e) => setDemonation(e.target.value)}
                      />
                      {errors.denomination && (
                        <p className="error text-danger">{errors.denomination}</p>
                      )}
                    </div>
                    <div class="form-group">
                      <label>adresse</label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="adresse"
                        value={adresse}
                        onChange={(e) => setAdresse(e.target.value)}
                      />
                      {errors.adresse && (
                        <p className="error text-danger">{errors.adresse}</p>
                      )}
                    </div>
                    <div class="form-group">
                      <label>telephone</label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="telephone"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                      />
                      {errors.telephone && (
                        <p className="error text-danger">{errors.telephone}</p>
                      )}
                    </div>
                    <div class="form-group">
                      <label>Localisation</label>
                      <GoogleMapComponent
                        errors={errors}
                        isFromViewLocalisation={false}
                        longitude={longitude}
                        latitude={latitude}
                        setLongitude={setLongitude}
                        setLatitude={setLatitude}
                      />
                      {errors.Localisation && (
                        <p className="error ">{errors.Localisation}</p>
                      )}
                    </div>
                    <button type="submit" class="btn_1">
                      Ajouter
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />

        <div id="toTop"></div>
      </div>
      <ToastContainer
          toastStyle={{ backgroundColor: "#05b30c", color: "white" }}
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </div>
  );
};

export default RegistreCabinet;
