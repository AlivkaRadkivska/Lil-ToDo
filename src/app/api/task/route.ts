import { getTasks } from '@/db/task-actions';

export async function GET(): Promise<Response> {
  const res = await getTasks();
  return Response.json(res);
}
