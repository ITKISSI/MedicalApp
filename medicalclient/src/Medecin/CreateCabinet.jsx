import { useState } from "react";
import Navbar from "../adminComponents/Navbar";
import axiosInstance from "../services/apiClient";
import GoogleMapComponent from "../components/GoogleMapComponent";
import { ReactComponent as Loader } from "../Loader.svg";

const CreateCabinet = () => {
  const [denomination, setDemonation] = useState("");
  const [address, setAdresse] = useState("");
  const [telephone, setTelephone] = useState("");
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [submitText, setSubmitText] = useState("Ajouter");
  const [isAdded, setIsAdded] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    axiosInstance
      .post("/cabinet", {
        denomination,
        address,
        telephone,
        longitude,
        latitude,
      })
      .then((response) => {
        console.log("Data created successfully +longitude " + longitude);
        console.log("Data created successfully +latitude " + latitude);
        setIsAdded(true);

        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
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
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>adresse</label>
                    <input
                      type="text"
                      value={address}
                      onChange={(event) => setAdresse(event.target.value)}
                      className="form-control"
                      placeholder="adresse"
                    />
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
                  </div>
                  <p>
                    <button className="btn_1 medium" type="submit">
                      {!isLoading ? submitText : <Loader className="spinner" />}
                    </button>{" "}
                    <br />
                    {isAdded && <span className="text-success">Le cabinet a été ajouté.</span>}
                  </p>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Localisation</label>

                    <GoogleMapComponent
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
      </div>
    </>
  );
};

export default CreateCabinet;
