import { useEffect, useState } from "react";
import Navbar from "../adminComponents/Navbar";
import axiosInstance from "../services/apiClient";
import TableRow from "../components/TableRow";

const ListMedcin = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/medcin")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const deleteMedecin = (medcinId) => {
    axiosInstance
      .delete("/medcin/" + medcinId)
      .then((response) => {
        const newData = data.filter((item) => item.id !== medcinId);
        setData(newData);
        console.log(response.data);
        // do something with the response
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateMedecin = (updatedData, medcinId) => {
    console.log('=================here===================');
    console.log('====================================');
    axiosInstance
      .put(`/medcin/${medcinId}`, updatedData)
      .then((response) => {
        const updatedList = data.map((item) =>
          item.id === medcinId ? response.data : item
        );
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
                      <th>firstName</th>
                      <th>lastName</th>
                      <th>age</th>
                      <th>adress</th>
                      <th>cin</th>
                      <th>login</th>
                      <th>password</th>
                      <th>inp</th>
                      <th>specialite</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {data.map((item, index) => (
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
          {/* /tables*/}
        </div>
      </div>
    </>
  );
};

export default ListMedcin;
