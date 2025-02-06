"use client";
import React from "react";
import InputText from "../../../../components/RegisterAccount/InputText";
import useRegister from "../../../../hooks/RegisterAccountHooks/useRegister";
import InputEmail from "../../../../components/RegisterAccount/InputEmail";
import InputPassword from "../../../../components/RegisterAccount/InputPassword";
import ButtonSubmit from "../../../../components/RegisterAccount/ButtonSubmit";
import Table from "../../../../components/RegisterAccount/Table";

const RegisterPage = () => {
  const { userAccount, users, handleChange, handleSubmit } = useRegister({
    initialize: { username: "", password: "", email: "" },
  });

  return (
    <div className="flex items-center flex-col gap-24">
      <section>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <InputText
            name="username"
            onChanges={handleChange}
            values={userAccount.username}
          />
          <InputEmail
            name="email"
            onChanges={handleChange}
            values={userAccount.email}
          />
          <InputPassword
            name="password"
            onChanges={handleChange}
            values={userAccount.password}
          />
          <ButtonSubmit label="Submit" />
        </form>
      </section>

      <section>
        <Table users={users}/>
      </section>
    </div>
  );
};

export default RegisterPage;
