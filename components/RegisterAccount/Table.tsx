import React, { useState } from "react";
import useRegister from "../../hooks/RegisterAccountHooks/useRegister";

type TableProps = {
    users: { username: string, email: string, password: string}[]
}
const Table = ({ users }: TableProps) => {
  return (
    <table className="table border-black border-2">
      <caption>Account Details</caption>
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
