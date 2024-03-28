'use client';
import ReactStars from 'react-stars';
import { TextInput } from './form-items/text-input';
import { Button } from './form-items/button';

export function TaskForm() {
  // add logic for adding task

  return (
    <form
      className="flex flex-col items-end mt-3"
      // onSubmit={}
    >
      <p className="p-1 self-start text-slate-800 font-bold">New task:</p>
      <TextInput
        label="Task name:"
        id="name"
        name="name"
        placeholder="To do something"
      />
      <div className="flex p-2 gap-5 w-full">
        <p>Priority:</p>
        <ReactStars
          count={5}
          color1="#1E293B"
          color2="#fff"
          half={false}
          size={16}
          value={1}
          // onChange={}
        />
      </div>
      <Button>
        <input
          type="submit"
          name="submit"
          id="submit"
          value="Add"
          className="cursor-pointer"
        />
      </Button>
    </form>
  );
}
