import { useEffect, useState } from "react";
import axiosInstance from "../services/apiClient";
import TableRow from "../components/TableRow";
import Pagination from "../components/Pagination";
import Navbar from "../adminComponents/Navbar";

const ListMedcin = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [tottalPages, setTottalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState();

  const handleSearch = (query) => {
    setSearchTerm(query);
    const filtered = data.filter((item) =>
      (
        item.firstName.toLowerCase() +
        " " +
        item.lastName.toLowerCase()
      ).includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const fetchData = (currentPage) => {
    axiosInstance
      .get(`/medcin?pageNumber=${currentPage}`)
      .then((response) => {
        setData(response.data.medecinList);
        setFilteredData(response.data.medecinList);
        setTottalPages(response.data.totalPages);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const deleteMedecin = (medcinId) => {
    axiosInstance
      .delete("/medcin/" + medcinId)
      .then((response) => {
        const newData = data.filter((item) => item.id !== medcinId);
        setData(newData);
        setFilteredData(newData); // Add this line
        console.log(response.data);
        // do something with the response
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateMedecin = (updatedData, medcinId) => {
    axiosInstance
      .put(`/medcin/${medcinId}`, updatedData)
      .then((response) => {
        const updatedList = data.map((item) =>
          item.id === medcinId ? response.data : item
        );
        setData(updatedList);
        setFilteredData(updatedList); // Add this line
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
          {/* ... (breadcrumb and other elements) */}
          <div className="card mb-3">
            <div className="card-header">
              <i className="fa fa-table" /> List de Medcin
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <div>
                  <input
                    className="form-control search-top ml-auto mb-3"
                    type="text"
                    placeholder="Chercher avec le nom et prénom"
                    onChange={(event) => handleSearch(event.target.value)}
                  />
                </div>

                <table className="table table-bordered" width="100%">
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>firstName</th>
                      <th>lastName</th>
                      <th>age</th>
                      <th>adress</th>
                      <th>cin</th>
                      <th>inp</th>
                      <th>specialite</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((item, index) => (
                      <TableRow
                        key={index}
                        item={item}
                        onDelete={deleteMedecin}
                        onUpdate={updateMedecin}
                        onCancel={() => {}}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Pagination tottalPages={tottalPages} onClick={setCurrentPage} />
        </div>
      </div>
    </>
  );
};

export default ListMedcin;
