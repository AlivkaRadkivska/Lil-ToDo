'use client';
import { TextInput } from './form-items/text-input';
import { RadioButtons } from './form-items/radiobuttons';
import { Select } from './form-items/select';

export function SearchForm() {
  // add searching logic

  return (
    <form className="flex flex-col border-b-2 pb-3 border-slate-800 items-start">
      <p className="p-1 self-start text-slate-800 font-bold">Searching:</p>
      <TextInput
        label="Search by name:"
        id="search"
        name="search"
        placeholder="name"
      />
      <Select
        label="Filter by status:"
        id="status"
        name="status"
        options={[
          { name: 'All', value: '' },
          { name: 'Undone', value: 'false' },
          { name: 'Done', value: 'true' },
        ]}
      />
      <RadioButtons
        label="Sort by priority:"
        name="priority"
        options={[
          { name: 'Descending', value: 'desc' },
          { name: 'Ascending', value: 'asc' },
        ]}
        prevValue="desc"
      />
    </form>
  );
}
