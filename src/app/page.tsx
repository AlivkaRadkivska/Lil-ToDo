import { SearchForm } from '@/components/search-form';
import { Task } from '@/components/task';
import { TaskForm } from '@/components/task-form';
import { testTasks } from '@/test-data/tasks';

export default function Home() {
  // add logic getting tasks

  return (
    <main className="flex min-h-screen items-center justify-between">
      <div className="flex flex-col w-min h-screen bg-slate-500 p-3">
        <SearchForm />
        <TaskForm />
      </div>

      <div className="w-full flex flex-col p-5 gap-5 justify-start min-h-screen">
        {testTasks.map((el) => (
          <Task key={el.id} task={el} />
        ))}
      </div>
    </main>
  );
}
