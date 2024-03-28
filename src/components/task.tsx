'use client';
import { TaskT } from '@/types/task';
import { Button } from './form-items/button';
import ReactStars from 'react-stars';

interface TaskProps {
  task: TaskT;
}

export function Task({ task: { id, name, priority, status } }: TaskProps) {
  // add logic for toggling status
  // add logic for deleting

  return (
    <div className="w-full flex flex-col bg-slate-500 p-3 rounded">
      <input className="hidden" type="text" value={id} readOnly />
      <div className="w-full flex justify-between">
        <ReactStars
          edit={false}
          count={5}
          value={priority}
          color1="#1E293B"
          color2="#fff"
          half={false}
          size={16}
        />
        <Button>Del</Button>
      </div>
      <div className="flex items-center gap-2">
        <input
          className="rounded w-4 h-4"
          type="checkbox"
          checked={status}
          // onChange={}
        />
        <p>{name}</p>
      </div>
    </div>
  );
}
