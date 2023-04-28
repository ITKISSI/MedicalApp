import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { Link , useParams , useNavigate} from 'react-router-dom';

function FormReporter() {
    const { id } = useParams();
    const Navigate = useNavigate();
    const [appointment, setAppointment] = useState({ date: '', hour: '' });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://127.0.0.1:8000/appointments/${id}`)
          .then(response => response.json())
          .then(data => {
            setAppointment(data);
            setIsLoading(false);
          });
      }, [id]);

      function handleSubmit(event) {
        event.preventDefault();
    
        fetch(`https://127.0.0.1:8000/api/appointments/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ date: appointment.date, hour: appointment.hour }),
        })
          .then(response => response.json())
          .then(() => {
            alert('Appointment updated!');
            Navigate('/appointments');
          });
      }
      function handleDateChange(event) {
        setAppointment({
          ...appointment,
          date: event.target.value,
        });
      }

      function handleHourChange(event) {
        setAppointment({
          ...appointment,
          hour: event.target.value,
        });
      }

      if (isLoading) {
        return <div class="preloader">
        <div data-loader="circle-side"></div>
      </div>
      ;
      }



    return (
        <body class="fixed-nav sticky-footer" id="page-top">
            <Navbar />
            <div class="content-wrapper">
                <div class="container-fluid">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <Link to="/">Acceuil</Link>
                        </li>
                        <li class="breadcrumb-item active"> <Link to="RdvList">Liste des rendez-vous</Link></li>
                        <li class="breadcrumb-item active">
                            Reporter un rendez-vous</li>
                    </ol>

                    <form onSubmit={handleSubmit} class="box_general padding_bottom">
                        <div class="header_box version_2">
                            <h2><i class="fa fa-file"></i>Reporter un rendez-vous</h2>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" name="firstName" class="form-control" value={appointment.Patient.firstName} />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Last name</label>
                                    <input type="text" name="lastName" class="form-control" value={appointment.Patient.lastName} />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Date</label>
                                    <input type="text" name="date" class="form-control" 
                                    value={appointment.date} onChange={handleDateChange} />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Heure</label>
                                    <input type="text" name="hour" class="form-control"
                                    value={appointment.hour} onChange={handleHourChange}
                                    />
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <button type="submit">
                                        Reporter
                                    </button>
                                </div>
                            </div>

                            

                        </div>


                    </form>

                </div>
            </div>
            <Footer />
        </body>

    )
}

export default FormReporter