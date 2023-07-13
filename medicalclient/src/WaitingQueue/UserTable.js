import React from 'react';
import { Person } from '@mui/icons-material';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { Link } from 'react-router-dom'



const UserTable = ({ users }) => {

 
  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  };
  

  
  return (
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
          <i class="fa fa-table"></i> File d'attente pour le {getCurrentDate()}</div>
        <div class="card-body">
          <div class="table-responsive">


            <table class="table table-bordered" id="dataTable"  cellspacing="0">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nom du patient(e)</th>
                  <th>Ordre</th>
                  <th>Temps restant</th>
                  
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>                        
                    <td>{user.name}</td>
                    <td style={{ textAlign: 'center' }}>{user.id === 2 ? (
                        <Person color="success" sx={{ fontSize: 80 }} />
                      ) : (
                        <Person sx={{ fontSize: 80 }} />
                      )}</td>
                    <td>Time</td>
                  </tr>
                ))}
              </tbody>
            </table>
            




          </div>
        </div>
      </div>
    </div>
    </div>

  )};

export default UserTable;
