'use client';
import { SetStateAction, useState } from 'react';

interface FormSelectPropsT {
  label: string;
  name: string;
  options: {
    name: string;
    value: string;
  }[];
  prevValue: string;
}

export function RadioButtons({
  label,
  name,
  options,
  prevValue,
}: FormSelectPropsT) {
  const [value, setValue] = useState(prevValue);

  function handleChange(e: { target: { value: SetStateAction<string> } }) {
    setValue(e.target.value);
  }

  return (
    <div className="p-2 w-full">
      {label}
      <div className="flex gap-2">
        {options.map((option) => (
          <label className="w-max" key={option.value} htmlFor={option.value}>
            <input
              type="radio"
              id={option.value}
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={handleChange}
            />
            {option.name}
          </label>
        ))}
      </div>
    </div>
  );
}
