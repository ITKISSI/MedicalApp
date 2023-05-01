import { useState } from "react";
import Navbar from "../adminComponents/Navbar";
import MapContainer from "../components/MapContainer";
import axiosInstance from "../services/apiClient";
const CreateCabinet = () => {
  const [denomination, setDemonation] = useState("");
  const [adresse, setAdresse] = useState("");
  const [telephone, setTelephone] = useState("");
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent the default form submission behavior
    console.log({ denomination, adresse, telephone, longitude, latitude });
    axiosInstance
      .post("/cabinet", {
        denomination: denomination,
        adresse: adresse,
        telephone: telephone,
        longitude: longitude,
        latitude: latitude,
      })
      .then((response) => {
        console.log("Data created successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <div className="container-fluid">
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
                      value={adresse}
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
                      Ajouter
                    </button>
                  </p>
                </div>

                <div className="col-md-6">
                  <MapContainer
                    isFromCreate={true}
                    setLongitude={setLongitude}
                    setLatitude={setLatitude}
                  />
                </div>
              </div>

              {/* /row*/}

              {/* /row*/}
            </div>
          </form>
        </div>
        {/* /.container-fluid*/}
      </div>
    </>
  );
};

export default CreateCabinet;
