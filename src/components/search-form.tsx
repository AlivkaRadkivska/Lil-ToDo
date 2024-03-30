'use client';
import { FormEvent, SetStateAction, useState } from 'react';

interface SearchFormPropsT {
  prevSearch: string | undefined;
}

export function SearchForm({ prevSearch }: SearchFormPropsT) {
  const [search, setSearch] = useState(prevSearch ? prevSearch : '');

  function handleSearch(e: { target: { value: SetStateAction<string> } }) {
    setSearch(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    if (search === prevSearch) e.preventDefault();
  }

  return (
    <form
      className="flex flex-col border-b-2 pb-3 border-slate-800"
      onSubmit={handleSubmit}
    >
      <p className="p-1 self-start text-slate-800 font-bold">Searching:</p>
      <input type="text" name="priorityOrder" value="desc" readOnly hidden />
      <input type="text" name="status" value="all" readOnly hidden />
      <div className="flex min-w-max w-full items-center">
        <label className="p-2">
          <input
            className="text-black w-full p-1 pl-2 m-0 outline-none border-none rounded"
            type="text"
            name="search"
            placeholder="To do something"
            value={search}
            onChange={handleSearch}
          />
        </label>
        <input type="submit" value="🔍" className="cursor-pointer p-1" />
      </div>
    </form>
  );
}
