import React from "react";

const InputText = ({
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
      Username:
      <input
        type="text"
        name={name}
        onChange={onChanges}
        value={values}
        className="grow"
        required
      />
    </label>
  );
};

export default InputText;
