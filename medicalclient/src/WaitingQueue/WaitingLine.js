import React, { useState, useEffect } from 'react';
import PatientNavbar from '../patient/PatientNavbar';
import PatientFooter from '../patient/PatientFooter';
import axios from 'axios';
import { Link } from 'react-router-dom';



function WaitingLine() {
  const [position, setPosition] = useState(null);
  const [statut, setStatut] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get(`http://localhost:8089/waiting-line/status/${user.id}`)
      .then((response) => {
        setStatut(response.data);
        if (response.data === "CONFIRMED") {
          axios
            .get(`http://localhost:8089/waiting-line/position/${user.id}`)
            .then((response) => {
              setPosition(response.data);
              console.log("=======================");
              console.log(position);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user.id]);

  // rest of the component code




  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  };

  return (

    <body class="fixed-nav sticky-footer" id="page-top">
      <PatientNavbar />

            

      <div class="content-wrapper">
  <div class="container-fluid">

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <Link to="/">Dashboard</Link>
      </li>
      <li class="breadcrumb-item active">File d'attente</li>
    </ol>

    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card text-dark bg-success" style={{ maxWidth: '18rem' }}>
          <div class="card-header">File d'attente pour le {getCurrentDate()}</div>
          {position === 0 ?
          (<div class="card-body">
            <h3 class="card-title">Your appointment is Expired</h3>
          </div>)
          :
          (statut !== "CONFIRMED" ?
            (<div class="card-body">
              <h3 class="card-title">Your appointment is {statut}</h3>
            </div>)
            :
            (<div class="card-body">
              <h3 class="card-title">Patient(e): <span class="text-light">{user.firstName}</span></h3>
              <h3 class="card-title">Numero: <span class="text-light">{user.id}</span></h3>
              <h4 class="card-title">Your position is: <span class="text-light">{position}</span></h4>
            </div>)
          )
        }
          

          
        </div>
      </div>
    </div>

  </div>
</div>
              
      <PatientFooter />

      <a class="scroll-to-top rounded" href="#page-top">
        <i class="fa fa-angle-up"></i>
      </a>
      

    </body>
    
  );
};

export default WaitingLine;

