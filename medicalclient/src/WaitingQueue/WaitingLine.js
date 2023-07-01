import React from 'react';
import UserTable from './UserTable';
import PatientNavbar from '../patient/PatientNavbar';
import PatientFooter from '../patient/PatientFooter';

const users=[
    {id:1,name:'karim'},
    {id:2,name:'rachid'},
    {id:3,name:'na3ima'},
  ];


const WaitingLine = () => {
  return (

    <body class="fixed-nav sticky-footer" id="page-top">
      <PatientNavbar />

              <div>
                 <UserTable users={users}/>
              </div>
                
              
      <PatientFooter />

      <a class="scroll-to-top rounded" href="#page-top">
        <i class="fa fa-angle-up"></i>
      </a>
      

    </body>
    
  );
};

export default WaitingLine;


