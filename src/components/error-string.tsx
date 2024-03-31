import React from 'react';

interface ButtonPropsT {
  children: React.ReactNode;
}

export function ErrString({ children }: ButtonPropsT) {
  return (
    <p className="w-full text-sm border-t-2 my-1 border-red-600">{children}</p>
  );
}
