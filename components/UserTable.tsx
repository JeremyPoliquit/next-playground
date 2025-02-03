"use client";
import React, { useEffect, useState } from "react";

const UserTable = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch("/data/users.json")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <table className="table border-2">
      <thead>
        <tr className="text-lg text-black">
          <th></th>
          <th>Username</th>
          <th>Password</th>
        </tr>
      </thead>
      {users.map((user) => (
        <tbody>
          <tr>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.password}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default UserTable;
