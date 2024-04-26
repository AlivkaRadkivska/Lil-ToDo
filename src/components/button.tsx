import React from 'react';

interface ButtonPropsT {
  children: React.ReactNode;
}

export function Button({ children }: ButtonPropsT) {
  return (
    <button className=" text-white border-2 border-white py-1 px-3 ease-in-out hover:bg-white hover:text-slate-800 rounded cursor-pointer font-bold">
      {children}
    </button>
  );
}
