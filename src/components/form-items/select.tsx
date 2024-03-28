'use client';
import { SetStateAction, useState } from 'react';

interface SelectPropsT {
  label: string;
  name: string;
  id: string;
  options: {
    name: string;
    value: string;
  }[];
  prevValue?: string;
}

export function Select({ label, name, id, options, prevValue }: SelectPropsT) {
  const [value, setValue] = useState(prevValue);

  function handleChange(e: {
    target: { value: SetStateAction<string | undefined> };
  }) {
    setValue(e.target.value);
  }

  return (
    <label htmlFor={id} className="p-2">
      {label}
      <select
        className="text-black w-full p-2 outline-none border-none rounded"
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
      >
        {options.map((elem) => (
          <option className="p-2" value={elem.value} key={elem.value}>
            {elem.name}
          </option>
        ))}
      </select>
    </label>
  );
}
