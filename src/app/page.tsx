'use server';
import { SearchForm } from '@/components/search-form';
import { Task } from '@/components/task';
import { NewTaskForm } from '@/components/new-task-form';
import { getTasks } from '@/db/task-actions';
import { TaskT } from '@/types/task';
import { FilterParamsT } from '@/types/filter-params';
import { FilterForm } from '@/components/filter-form';
import { Suspense } from 'react';

interface HomePagePropsT {
  searchParams: FilterParamsT;
}

async function Tasks({ searchParams }: HomePagePropsT) {
  const testTasks: TaskT[] = await getTasks(searchParams);

  return (
    <div className="w-full flex flex-col p-5 gap-5 justify-start min-h-screen h-screen sm:overflow-y-scroll">
      {testTasks.length > 0 ? (
        testTasks && testTasks.map((el) => <Task key={el.id} task={el} />)
      ) : (
        <p className="p-2 w-full text-center">Nothing was found</p>
      )}
    </div>
  );
}

export default async function HomePage({ searchParams }: HomePagePropsT) {
  return (
    <main className="flex flex-col min-h-screen items-center sm:flex-row sm:justify-between sm:items-start">
      <div className="flex flex-col w-full sm:w-min bg-slate-500 p-3 sm:min-h-screen h-full">
        <SearchForm prevSearch={searchParams.search} />
        <FilterForm
          prevStatus={searchParams.status}
          prevPriorityOrder={searchParams.priorityOrder}
        />
        <NewTaskForm />
      </div>

      <Suspense
        fallback={
          <p className="w-screen h-screen flex items-center justify-center">
            Tasks are loading...
          </p>
        }
      >
        <Tasks searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
