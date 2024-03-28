import { SetStateAction, useState } from 'react';

interface TextInputPropsT {
  label: string;
  name: string;
  id: string;
  placeholder: string;
  prevValue?: string;
}

export function TextInput({
  label,
  name,
  id,
  placeholder,
  prevValue,
}: TextInputPropsT) {
  const [value, setValue] = useState(prevValue);

  function handleSearch(e: {
    target: { value: SetStateAction<string | undefined> };
  }) {
    setValue(e.target.value);
  }

  return (
    <label htmlFor={id} className="p-2">
      {label}
      <input
        className="text-black w-full p-1 pl-2 m-0 outline-none border-none rounded"
        type="text"
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleSearch}
      />
    </label>
  );
}
