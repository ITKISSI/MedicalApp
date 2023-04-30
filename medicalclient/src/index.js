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
import Login from './components/Login';
import List from './components/List';
import RegisterDoctor from './components/RegisterDoctor';
import Detail from './components/Detail';
import SubmitReview from './components/SubmitReview';
import Register from './components/Register';
import About from './components/About';
import Contacts from './components/Contacts';
import Booking from './components/Booking';
import Confirm from './components/Confirm';
import Error404 from './components/Error404';

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
    path: "login",
    element: <Login />,
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
    path: "register",
    element: <Register />,
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
    path: "error404",
    element: <Error404 />,
  },

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
