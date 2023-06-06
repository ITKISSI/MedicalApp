import React from 'react';
import { Person } from '@mui/icons-material';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

const UserTable = ({ users }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>User</TableCell>
          <TableCell>User ID</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              {user.id === 2 ? (
                <Person color="success" sx={{ fontSize: 100 }} />
              ) : (
                <Person sx={{ fontSize: 100 }} />
              )}
            </TableCell>
            <TableCell>{user.id}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserTable;
