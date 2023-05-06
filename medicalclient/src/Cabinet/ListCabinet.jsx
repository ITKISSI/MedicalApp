import { useEffect, useState } from "react";
import Navbar from "../adminComponents/Navbar";
import axiosInstance from "../services/apiClient";
import MapModel from "../components/MapModel";
import TableRowCabinet from "../components/TableRowCabinet";
import Pagination from "../components/Pagination";

const ListCabinet = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [tottalPages, setTottalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState();

  const handleSearch = (query) => {
    setSearchTerm(query);
    const filtered = data.filter((item) =>
      item.denomination.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const getData = (pageNumber) => {
    axiosInstance
      .get(`/cabinet?pageNumber=${pageNumber}`)
      .then((response) => {
        setData(response.data.cabinetList);
        setFilteredData(response.data.cabinetList);
        setTottalPages(response.data.totalPages);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData(currentPage);
  }, [currentPage]);

  const deleteCabinet = (cabinetId) => {
    axiosInstance
      .delete("/cabinet/" + cabinetId)
      .then((response) => {
        const newData = filteredData.filter((item) => item.id !== cabinetId);
        setFilteredData(newData);
        setData(newData);
        console.log(response.data);
        // do something with the response
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateCabinet = (updatedData, cabinetId) => {
    axiosInstance
      .put(`/cabinet/${cabinetId}`, updatedData)
      .then((response) => {
        const updatedList = filteredData.map((item) =>
          item.id === cabinetId ? response.data : item
        );
        setFilteredData(updatedList);
        setData(updatedList);
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
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Tables</li>
          </ol>
          <div className="card mb-3">
            <div className="card-header">
              <i className="fa fa-table" /> List de cabinets
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <div>
                  <input
                    className="form-control search-top ml-auto mb-3"
                    type="text"
                    placeholder="Chercher avec denomination"
                    onChange={(event) => handleSearch(event.target.value)}
                  />
                </div>

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
                    {filteredData.map((item, index) => (
                      <TableRowCabinet
                        key={index}
                        item={item}
                        handleViewLocalisation={() => {
                          setLng(item.longitude);
                  

                          setLat(item.latitude);
                          setShowModal(true);
                        }}
                        onDelete={deleteCabinet}
                        onUpdate={updateCabinet}
                        onCancel={() => {}}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <Pagination tottalPages={tottalPages} onClick={setCurrentPage} />
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
