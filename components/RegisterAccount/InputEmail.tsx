import React from "react";

const InputEmail = ({
  name,
  onChanges,
  values
}: {
  name: string;
  onChanges: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: string;
}) => {
  return (
    <label className="input input-bordered border-1 border-black flex items-center gap-2">
      E-mail:
      <input
        type="email"
        name={name}
        onChange={onChanges}
        value={values}
        className="grow"
        required
      />
    </label>
  );
};

export default InputEmail;
