import { useState } from "react";

const MedecinModel = ({ onClose, modalState, data }) => {
  const modalStyle = {
    position: "absolute",
    zIndex: 1,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  };

  const modalContentStyle = {
    backgroundColor: "white",
    margin: "15% auto",
    padding: "20px",
    border: "1px solid #888",
    width: "80%",
  };

  return (
    <>
      {modalState && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" width="100%">
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
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id}>
                        <th>{item.id}</th>
                        <th>{item.firstName}</th>
                        <th>{item.lastName}</th>
                        <th>{item.age}</th>
                        <th>{item.adress}</th>
                        <th>{item.cin}</th>
                        <th>{item.login}</th>
                        <th>{item.password}</th>
                        <th>{item.inp}</th>
                        <th>{item.specialite}</th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-primary" onClick={onClose}>
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MedecinModel;
