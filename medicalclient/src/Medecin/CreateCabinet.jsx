import { useState, useEffect } from "react";
import Navbar from "../adminComponents/Navbar";
import axiosInstance from "../services/apiClient";
import GoogleMapComponent from "../components/GoogleMapComponent";
import { ToastContainer, toast } from "react-toastify";

const CreateCabinet = () => {
  const [denomination, setDemonation] = useState("");
  const [adresse, setAdresse] = useState("");
  const [telephone, setTelephone] = useState("");
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = {};

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
    <>
      <Navbar />
      <div className="content-wrapper ">
        <div className="container-fluid ">
          {/* Breadcrumbs*/}
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Add listing</li>
          </ol>
          <form onSubmit={handleSubmit}>
            <div className="box_general padding_bottom">
              <div className="header_box version_2">
                <h2>
                  <i className="fa fa-file" />
                  Cabinet informations
                </h2>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>denomination</label>
                    <input
                      type="text"
                      value={denomination}
                      onChange={(event) => setDemonation(event.target.value)}
                      className="form-control"
                      placeholder="denomination"
                    />
                    {errors.denomination && (
                      <p className="text-danger">{errors.denomination}</p>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>adresse</label>
                    <input
                      type="text"
                      value={adresse}
                      onChange={(event) => setAdresse(event.target.value)}
                      className="form-control"
                      placeholder="adresse"
                    />
                    {errors.adresse && (
                      <p className="text-danger">{errors.adresse}</p>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>telephone</label>
                    <input
                      type="number"
                      value={telephone}
                      onChange={(event) => setTelephone(event.target.value)}
                      className="form-control"
                      placeholder="telephone"
                    />
                    {errors.telephone && (
                      <p className="text-danger">{errors.telephone}</p>
                    )}
                  </div>
                  <p>
                    <button className="btn_1 medium" type="submit">
                      Ajouter
                    </button>{" "}
                  </p>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Localisation</label>

                    <GoogleMapComponent
                      errors={errors}
                      isFromViewLocalisation={false}
                      longitude={longitude}
                      latitude={latitude}
                      setLongitude={setLongitude}
                      setLatitude={setLatitude}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
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
    </>
  );
};

export default CreateCabinet;
