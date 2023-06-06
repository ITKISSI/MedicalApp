import React from 'react';
import UserTable from './UserTable';

const users=[
    {id:1,name:'karim'},
    {id:2,name:'rachid'},
    {id:3,name:'na3ima'},
  ];


const WaitingLine = () => {
  return (
    <div>
        <UserTable users={users}/>
    </div>
  );
};

export default WaitingLine;