import React from "react";

const InputPassword = ({
  name,
  onChanges,
  values,
}: {
  name: string;
  onChanges: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: string;
}) => {
  return (
    <label className="input input-bordered border-1 border-black flex items-center gap-2">
      Password:
      <input
        type="password"
        className="grow"
        name={name}
        onChange={onChanges}
        required
      />
    </label>
  );
};

export default InputPassword;
