'use client';
import ReactStars from 'react-stars';
import { Button } from './button';
import { useState } from 'react';
import { useFormState } from 'react-dom';
import { addTask } from '@/db/task-actions';

export function NewTaskForm() {
  const [_formState, submit] = useFormState(addTask, { message: [] });
  const [priorityStars, setStars] = useState(3);
  const [taskName, setTaskName] = useState('');

  function handleSubmit() {
    setStars(3);
    setTaskName('');
  }

  return (
    <form
      className="flex flex-col mt-3"
      action={submit}
      onSubmit={handleSubmit}
    >
      <p className="p-1 text-slate-800 font-bold">New task:</p>
      <label className="p-2">
        Task name:
        <input
          className="text-black w-full p-1 pl-2 m-0 outline-none border-none rounded"
          type="text"
          name="name"
          placeholder="To do something"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
      </label>
      <div className="flex p-2 gap-5 w-full min-w-max">
        <p>Priority:</p>
        <input
          type="number"
          name="priority"
          value={priorityStars}
          hidden
          readOnly
        />
        <ReactStars
          count={5}
          color1="#1E293B"
          color2="#fff"
          half={false}
          size={16}
          value={priorityStars}
          onChange={(new_rating) => setStars(new_rating)}
        />
      </div>
      <Button>
        <input
          type="submit"
          name="add-submit"
          value="Add"
          className="cursor-pointer"
        />
      </Button>
    </form>
  );
}
