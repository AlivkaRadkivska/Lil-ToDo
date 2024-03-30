'use client';
import { useState } from 'react';
import { redirect } from 'next/navigation';
import { priorityOptions, statusOptions } from '@/types/filter-params';

interface SearchFormPropsT {
  prevStatus: string | undefined;
  prevPriorityOrder: string | undefined;
}

export function FilterForm({
  prevStatus,
  prevPriorityOrder,
}: SearchFormPropsT) {
  const [status, setStatus] = useState(prevStatus ? prevStatus : 'all');
  const [priorityOrder, setPriorityOrder] = useState(
    prevPriorityOrder ? prevPriorityOrder : 'desc'
  );

  if (status != prevStatus || priorityOrder != prevPriorityOrder)
    redirect(`/?status=${status}&priorityOrder=${priorityOrder}`);

  return (
    <form className="flex flex-col border-b-2 pb-3 pt-3 border-slate-800 items-start">
      <p className="p-1 self-start text-slate-800 font-bold">Filtering:</p>
      <label className="p-2">
        Select by status
        <select
          className="text-black w-full p-2 outline-none border-none rounded"
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          {statusOptions.map((elem) => (
            <option className="p-2 w-full" value={elem.value} key={elem.value}>
              {elem.name}
            </option>
          ))}
        </select>
      </label>
      <div className="p-2 w-full">
        Sort by priority:
        <div className="flex gap-2">
          {priorityOptions.map((option) => (
            <label className="w-max" key={option.value}>
              <input
                type="radio"
                name="priorityOrder"
                value={option.value}
                checked={priorityOrder === option.value}
                onChange={(e) => setPriorityOrder(e.target.value)}
              />
              {option.name}
            </label>
          ))}
        </div>
      </div>
    </form>
  );
}
