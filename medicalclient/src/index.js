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
    path: "/appointments/:id/edit",
    element: <FormReporter />,
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
