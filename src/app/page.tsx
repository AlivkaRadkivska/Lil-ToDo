'use server';
import { SearchForm } from '@/components/search-form';
import { Task } from '@/components/task';
import { NewTaskForm } from '@/components/new-task-form';
import { getTasks } from '@/db/task-actions';
import { TaskT } from '@/types/task';
import { FilterParamsT } from '@/types/filter-params';
import { FilterForm } from '@/components/filter-form';

interface HomePagePropsT {
  searchParams: FilterParamsT;
}

export default async function HomePage({ searchParams }: HomePagePropsT) {
  const testTasks: TaskT[] = await getTasks(searchParams);

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

      <div className="w-full flex flex-col p-5 gap-5 justify-start min-h-screen h-screen sm:overflow-y-scroll">
        {testTasks && testTasks.map((el) => <Task key={el.id} task={el} />)}
      </div>
    </main>
  );
}
