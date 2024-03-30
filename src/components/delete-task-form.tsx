'use client';
import { deleteTask } from '@/db/task-actions';
import { TaskT } from '@/types/task';
import { useFormState } from 'react-dom';
import { Button } from './button';

interface DeleteTaskFormT {
  task: TaskT;
}

export function DeleteTaskForm({ task }: DeleteTaskFormT) {
  const [_formState, submit] = useFormState(deleteTask, { message: [] });

  return (
    <form action={submit} className="flex flex-col items-center">
      <input name="id" type="text" value={task.id} readOnly hidden />

      <Button>
        <input
          type="submit"
          name="delete-submit"
          value="Del"
          className="cursor-pointer"
        />
      </Button>
    </form>
  );
}
