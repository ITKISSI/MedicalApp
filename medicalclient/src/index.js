import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Dashbord from './Dashbord';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RdvList from './adminComponents/RdvList';
import App from './App';
import FormReporter from './adminComponents/FormReporter';
import LoginPatient from './components/LoginPatient';
import CreateMedcin from './Medecin/CreateMedcin';
import CreateCabinet from './Medecin/CreateCabinet';
import ListCabinet from './Cabinet/ListCabinet';
import ListMedcin from './Medecin/ListMedcin';
import List from './components/List';
import RegisterDoctor from './components/RegisterDoctor';
import Detail from './components/Detail';
import SubmitReview from './components/SubmitReview';
import RegisterPatient from './components/RegisterPatient';
import About from './components/About';
import Contacts from './components/Contacts';
import Booking from './components/Booking';
import Confirm from './components/Confirm';
import Error404 from './components/Error404';
import 'react-toastify/dist/ReactToastify.css';
import RegistreCabinet from './Cabinet/RegistreCabinet';
import ConfirmedEmail from './components/confirmedEmail';
import { LoadScript } from '@react-google-maps/api';
import RatingForm from './components/RatingForm';
import TestRating from './components/TestRating';
import UserTable from './WaitingQueue/UserTable';
import WaitingLine from './WaitingQueue/WaitingLine';
import PatientDashbord from './patient/PatientDashbord';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "admin",
    element: <Dashbord/>,
  },
  {
    path: "appointments",
    element: <RdvList/>,
  },
  {
    path: "appointments/:id/reporter",
    element: <FormReporter />,
  },
  {
    path: "createMedcin",
    element: <CreateMedcin />,
  },
  {
    path: "createCabinet",
    element: <CreateCabinet />,
  },
  {
    path :"cabinets",
    element:<ListCabinet/>

  },
  {
    path :"ListMedcin",
    element:<ListMedcin/>

  },
  {
    path: "list",
    element: <List />,
  },
  {
    path: "registerDoctor",
    element: <RegisterDoctor />,
  },
  {
    path: "detail",
    element: <Detail />,
  },
  {
    path: "submitReview",
    element: <SubmitReview />,
  },
  {
    path: "registerPatient",
    element: <RegisterPatient />,
  },
  
  {
    path: "login",
    element: <LoginPatient />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contacts",
    element: <Contacts />,
  },
  {
    path: "booking",
    element: <Booking />,
  },
  {
    path: "confirm",
    element: <Confirm />,
  },
  {
    path: "confirmedEmail",
    element: <ConfirmedEmail />,
  },
  {
    path: "error404",
    element: <Error404 />,
  },
  {
    path:'registreCabinet',
    element:<RegistreCabinet/>
  },
  {
    path:'doctorRatingForm',
    element:<RatingForm/>
  },
  {
    path:'testRating',
    element:<TestRating/>
  },
  {
    path:'userTable',
    element:<UserTable/>
  },
  {
    path:'waitingLine',
    element:<WaitingLine/>
  },
  {
    path:'patientAdmin',
    element:<PatientDashbord/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
     
  // </React.StrictMode>

  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
