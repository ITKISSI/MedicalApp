import React, { useState } from 'react';
import { Link, useLocation ,useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import moment from 'moment';


function Booking({}) {
  
  const [patientFirstName, setPatientFirstName] = useState('');
  const [patientLastName, setPatientLastName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [cin, setCIN] = useState('');
  const [age, setAge] = useState('');
  
  const navigate = useNavigate();
  const location = useLocation();
  // Assurez-vous que location.state existe avant d'accéder à ses propriétés
  if (!location.state) {
    return <div>No data available</div>;
  }

  const { doctor } = location.state;

  

  const handleSubmit = (e) => {
    e.preventDefault();

    const { doctor} = location.state;
    const currentDate = moment().format('YYYY-MM-DD');
    const currentHour = moment().format('HH:mm');
    const doctorId = doctor.id;
    
    

    // Envoyer les données au backend (Symfony) pour traitement
    const data = {
      doctorId : doctorId,
      doctorFirstName: doctor.firstName,
      doctorLastName: doctor.lastName,
      patientFirstName: patientFirstName,
      patientLastName: patientLastName,
      email: email,
      confirmEmail: confirmEmail,
      phoneNumber: phoneNumber,
      address: address,
      cin: cin,
      age: parseInt(age),
      date: currentDate,
      hour: currentHour,
      state: false,
    };
  
    // Effectuer une requête HTTP (par exemple, à l'aide de fetch) pour envoyer les données au backend
    fetch('https://127.0.0.1:8000/confirm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        // Traiter la réponse du backend (le cas échéant)
        console.log(responseData);
        navigate('/confirm' ,  { state: { email: data.email } });
      })
      .catch((error) => {
        // Gérer les erreurs (le cas échéant)
        console.error(error);
      });
        
        
  };
  

  return (
    <div className="App">
      <div className="content">
        <header className="header_sticky">
          <div className="container">
            {/* Composant Navbar */}
            <Navbar />
          </div>
        </header>
        <main>
          <div id="breadcrumb">
            <div className="container">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Category</a>
                </li>
                <li>Page active</li>
              </ul>
            </div>
          </div>

          <div className="container margin_60">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <div className="box_general_3 cart">
                  <div className="message">
                    <p>
                      Existing Customer?
                      <Link to="/loginPatient">Click here to login</Link>
                    </p>
                  </div>
                  <div className="form_title">
                    <h3>
                      <strong>Your Details</strong>
                    </h3>
                    <p>Mussum ipsum cacilds, vidis litro abertis.</p>
                  </div>
                  <div className="step">
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label>First name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="firstname_booking"
                            name="firstName"
                            placeholder="Jhon"
                            value={patientFirstName}
                            onChange={(e) =>
                              setPatientFirstName(e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label>Last name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastname_booking"
                            name="lastName"
                            placeholder="Doe"
                            value={patientLastName}
                            onChange={(e) =>
                              setPatientLastName(e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            id="email_booking"
                            name="email"
                            className="form-control"
                            placeholder="jhon@doe.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label>Confirm email</label>
                          <input
                            type="email"
                            id="email_booking_2"
                            name="confirmEmail"
                            className="form-control"
                            placeholder="jhon@doe.com"
                            value={confirmEmail}
                            onChange={(e) => setConfirmEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label>Telephone</label>
                          <input
                            type="text"
                            id="telephone_booking"
                            name="phoneNumber"
                            className="form-control"
                            placeholder="00 44 678 94329"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label>Address</label>
                          <input
                            type="text"
                            id="address_booking"
                            name="address"
                            className="form-control"
                            placeholder="abcd"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label>CIN</label>
                          <input
                            type="text"
                            id="cin_booking"
                            name="cin"
                            className="form-control"
                            placeholder="F9887"
                            value={cin}
                            onChange={(e) => setCIN(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label>Age</label>
                          <input
                            type="number"
                            id="age_booking"
                            name="age"
                            className="form-control"
                            placeholder="30"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                          />
                        </div>
                      </div>
                      {/* Autres champs du formulaire */}
                    </div>
                  </div>
                  <hr />
                </div>
              </div>

              <aside className="col-xl-4 col-lg-4" id="sidebar">
                <div className="box_general_3 booking">
                  <form onSubmit={handleSubmit}>
                    <div className="title">
                      <h3 style={{ color: 'white' }}>Your booking</h3>
                    </div>
                    <div className="summary">
                      <ul>
                        <li>
                          Date:{' '}
                          <strong className="float-right">11/12/2017</strong>
                        </li>
                        <li>
                          Hour:{' '}
                          <strong className="float-right">10.30 am</strong>
                        </li>
                        <li>
                          Dr. Name:{' '}
                          <strong className="float-right">
                            {doctor.firstName} {doctor.lastName}
                          </strong>
                        </li>
                        <li>
                          Patient Full Name:{' '}
                          <strong className="float-right">
                            {patientFirstName} {patientLastName}
                          </strong>
                        </li>
                        {/* Afficher les autres champs du formulaire */}
                      </ul>
                    </div>
                    <hr />
                    <button type="submit" className="btn_1 full-width">
                      Confirm
                    </button>
                  </form>
                  
                </div>
              </aside>
            </div>
          </div>
        </main>
        <Footer />
        <div id="toTop"></div>
      </div>
    </div>
  );
}

export default Booking;
