import React, { useState, useEffect } from 'react';
import Footer from './Footer'
import Navbar from './Navbar';
import { Link } from 'react-router-dom'
import moment from 'moment';


function RdvList() {

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("https://127.0.0.1:8000/api/appointments")
      .then(response => response.json())
      .then(data => setAppointments(data['hydra:member']));
  }, []);
    

  return (
    <body class="fixed-nav sticky-footer" id="page-top">
      <Navbar />

      <div class="content-wrapper">
        <div class="container-fluid">

          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Dashboard</Link>
            </li>
            <li class="breadcrumb-item active">Tables</li>
          </ol>

          <div class="card mb-3">
            <div class="card-header">
              <i class="fa fa-table"></i> Data Table Example</div>
            <div class="card-body">
              <div class="table-responsive">


                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Heure</th>
                      <th>Docteur</th>
                      <th>Nom du Patient</th>
                      <th>Prenom du Patient</th>
                      <th>Statut</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map(appointment => (
                      <tr key={appointment.id}>
                        <td>{moment(appointment.date).format('DD/MM/YYYY')}</td>                        
                        <td>{moment(appointment.hour).format('HH:mm')}</td>
                        <td>{appointment.Doctor[0].speciality}</td>
                        <td>{appointment.Patient.lastName}</td>
                        <td>{appointment.Patient.firstName}</td>
                        <td>{appointment.state ? "Confirme"
                         : "en attente"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                




              </div>
            </div>
            <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
          </div>

        </div>

      </div>

      <Footer />

      <a class="scroll-to-top rounded" href="#page-top">
        <i class="fa fa-angle-up"></i>
      </a>

      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
              <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div class="modal-footer">
              <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
              <a class="btn btn-primary" href="login.html">Logout</a>
            </div>
          </div>
        </div>
      </div>

    </body>
  )
}

export default RdvList