"use client";
import React, { useState } from "react";

type AccountUser = {
  username: string;
  email: string;
  password: string;
};

const useRegister = ({ initialize }: { initialize: AccountUser }) => {
  const [userAccount, setUserAccount] = useState(initialize);
  const [users, setUsers] = useState<AccountUser[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAccount((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Insert 1 record successfully");
    alert(
      `Username: ${userAccount.username}\nEmail: ${userAccount.email}\nPassword: ${userAccount.password}`
    );
    if (userAccount.username && userAccount.email && userAccount.password) {
      setUsers([...users, userAccount]);
      setUserAccount({ username: "", email: "", password: "" });
    }
  };

  return { userAccount, users, handleChange, handleSubmit };
};

export default useRegister;
