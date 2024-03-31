'use client';
import { TaskT } from '@/types/task';
import { useFormState } from 'react-dom';
import { updateTaskStatus } from '@/db/task-actions';
import { useState } from 'react';
import { ErrString } from './error-string';

interface UpdateTaskStatusFormT {
  task: TaskT;
}

export function UpdateTaskStatusForm({ task }: UpdateTaskStatusFormT) {
  const [checked, setChecked] = useState(task.status);
  const [formState, submit] = useFormState(updateTaskStatus, { message: '' });

  function handleChange() {
    setChecked((checked) => !checked);

    const data: FormData = new FormData();
    data.append('id', task.id);
    data.append('status', (!checked).toString());

    submit(data);
  }

  return (
    <form className="flex items-center">
      {formState.message && <ErrString>{formState.message}</ErrString>}
      <input
        className="rounded w-4 h-4"
        type="checkbox"
        name="status"
        checked={checked}
        onChange={handleChange}
      />
    </form>
  );
}
