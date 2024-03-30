'use client';
import { TaskT } from '@/types/task';
import ReactStars from 'react-stars';
import { DeleteTaskForm } from './delete-task-form';
import { UpdateTaskStatusForm } from './update-task-status-form';

interface TaskProps {
  task: TaskT;
}

export function Task({ task }: TaskProps) {
  return (
    <div className="w-full flex flex-col bg-slate-500 p-3 rounded">
      <input className="hidden" type="text" value={task.id} readOnly />
      <div className="w-full flex justify-between">
        <ReactStars
          edit={false}
          count={5}
          value={task.priority}
          color1="#1E293B"
          color2="#fff"
          half={false}
          size={16}
        />
        <DeleteTaskForm task={task} />
      </div>
      <div className="flex items-center gap-2">
        <UpdateTaskStatusForm task={task} />
        <p className={`${task.status ? 'line-through opacity-80' : ''}`}>
          {task.name}
        </p>
      </div>
    </div>
  );
}
