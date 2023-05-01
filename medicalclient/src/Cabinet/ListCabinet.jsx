import { useEffect, useState } from "react";
import Navbar from "../adminComponents/Navbar";
import axiosInstance from "../services/apiClient";
import MapModel from "../components/MapModel";

const ListCabinet = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  useEffect(() => {
    axiosInstance
      .get("/cabinet")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const deleteCabinet = (cabinetId) => {
    axiosInstance
      .delete("/cabinet/" + cabinetId)
      .then((response) => {
        const newData = data.filter((item) => item.id !== cabinetId);
        setData(newData);
        console.log(response.data);
        // do something with the response
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
            <li className="breadcrumb-item active">Tables</li>
          </ol>
          {/* Example DataTables Card*/}
          <div className="card mb-3">
            <div className="card-header">
              <i className="fa fa-table" /> List de cabinets
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellSpacing={0}
                >
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>denomination</th>
                      <th>adresse</th>
                      <th>telephone</th>
                      <th>Localisation</th>
                      <th>medecins</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {data.map((item) => (
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.denomination}</td>
                        <td>{item.adresse}</td>
                        <td>{item.telephone}</td>

                        <td>
                          <button
                            onClick={() => {
                              console.log(
                                "================onee===================="
                              );
                              console.log(lat);
                              console.log(lng);

                              console.log(
                                "=================end oone==================="
                              );
                              setLat(item.latitude);
                              setLng(item.longitude);
                              setShowModal(true);
                            }}
                          >
                            View Localisation
                          </button>
                        </td>
                        <td>{item.medecins.length}</td>
                        <td>
                          <button className="btn btn-warning">Modifier</button>{" "}
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              if (window.confirm("Are you sure you want to delete this item?")) {
                                deleteCabinet(item.id);
                              }
                            }}
                          >
                            Supprimer
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* /tables*/}
        </div>
        {/* /container-fluid*/}
      </div>
      {showModal && (
        <MapModel
          title="Modal Title"
          lat={lat}
          lng={lng}
          onClose={() => setShowModal(false)}
        >
          <p>Modal Content</p>
        </MapModel>
      )}
    </>
  );
};

export default ListCabinet;
