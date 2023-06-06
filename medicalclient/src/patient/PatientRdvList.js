import React, { useState, useEffect } from 'react';
import Footer from './Footer'
import Navbar from './Navbar';
import { Link } from 'react-router-dom'
import axios from 'axios';


function RdvList() {
  const [appointments, setAppointments] = useState([]);
  useEffect(()=>{
    loadAppointments();
},[])

  const loadAppointments=async () =>
    {
      const result = await axios.get("https://127.0.0.1:8000/appointments");
      setAppointments(result.data);
    };


    const handleConfirm = (id) => {
      const confirmed = window.confirm("Voulez-vous confirmer ce rendez-vous ?");
      if (confirmed) {
        fetch(`https://127.0.0.1:8000/appointments/${id}/stateChange`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({state: true})
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Une erreur est survenue lors de la mise à jour de l\'état du rendez-vous');
          }
          return response.json();
        })
        .then(data => {
          setAppointments(prevAppointments => {
            return prevAppointments.map(prevAppointment => {
              if (prevAppointment.id === id) {
                return {...prevAppointment, state: data.state};
              } else {
                return prevAppointment;
              }
            });
          });
          window.alert('Le rendez-vous a été confirmé avec succès');
        })
        .catch(error => {
          console.error(error);
          window.alert('Une erreur est survenue lors de la mise à jour de l\'état du rendez-vous');
        });
      }
    }
    

    const handleReject = (id) => {
      const confirmed = window.confirm("Voulez-vous rejeter ce rendez-vous ?");
      if (confirmed) {
        fetch(`https://127.0.0.1:8000/appointments/${id}/stateChange`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({state: false})
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Une erreur est survenue lors de la mise à jour de l\'état du rendez-vous');
          }
          return response.json();
        })
        .then(data => {
          setAppointments(prevAppointments => {
            return prevAppointments.map(prevAppointment => {
              if (prevAppointment.id === id) {
                return {...prevAppointment, state: data.state};
              } else {
                return prevAppointment;
              }
            });
          });
          window.alert('Le rendez-vous a été rejeté avec succès');
        })
        .catch(error => {
          console.error(error);
          window.alert('Une erreur est survenue lors de la mise à jour de l\'état du rendez-vous');
        });
      }
    }

    

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


                <table class="table table-bordered" id="dataTable"  cellspacing="0">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Heure</th>
                      <th>Nom du Docteur</th>
                      <th>specialite du Docteur</th>
                      <th>Nom du Patient</th>
                      <th>Statut</th>
                      <th>Operations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map(appointment => (
                      <tr key={appointment.id}>
                        <td>{appointment.date}</td>                        
                        <td>{appointment.hour}</td>
                        <td>{appointment.doctor.firstName} {appointment.doctor.lastName}</td>
                        <td>{ appointment.doctor.speciality}</td>
                        <td>{appointment.patient.lastName} {appointment.patient.firstName}</td> 
                        <td>{appointment.state ? (
                            <span className="text-success">Confirmé</span>
                          ) : (
                            <span className="text-danger">Non confirmé</span>
                          )}
                        </td>
                         <td>
                          <div  class="flex-container" style={{ display: 'flex' , justifyContent:'center' }} >
                            <button
                            style={{width: '100px',
                              margin: '2px',
                              textalign: 'center'}}
                            type="button" 
                            class="btn btn-success" 
                            onClick={() => handleConfirm(appointment.id)}
                         >
                          <b>
                            Valider
                          </b>
                          
                         </button>
                         <button type="button" class="btn btn-danger"
                         style={{width: '100px',
                         margin: '2px',
                         textalign: 'center'}}
                            onClick={() => handleReject(appointment.id)}
                         >
                          <b>
                           Rejeter 
                          </b>
                          
                          </button>
                         <button type="button" class="btn btn-warning"  style={{width: '100px',
                              margin: '2px',
                              textalign: 'center'}}>
                         <Link to={`/appointments/${appointment.id}/reporter`}>
                          
                          <b>
                            Reporter
                          </b>
                          </Link>
                          </button>
                          </div>
                         
                         </td>
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

      

    </body>
  )
}

export default RdvList