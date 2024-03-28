import { SetStateAction } from 'react';

interface InputPropsT {
  label: string;
  type: string;
  name: string;
  id: string;
  placeholder: string;
  value: boolean;
  onChange: (e: { target: { value: SetStateAction<string> } }) => void;
}

export function Input({
  label,
  name,
  id,
  placeholder,
  value,
  onChange,
}: InputPropsT) {
  return (
    <label htmlFor={id} className="p-2">
      {label}
      <input
        className="text-black w-full p-1 pl-2 m-0 outline-none border-none rounded"
        type="checkbox"
        name={name}
        id={id}
        placeholder={placeholder}
        value={`${value}`}
        onChange={onChange}
      />
    </label>
  );
}
