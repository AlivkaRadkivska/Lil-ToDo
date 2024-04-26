import { getTask } from '@/db/task-actions';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } },
): Promise<Response> {
  const id: string = params.id;

  const res = await getTask(id);
  if (res.length > 0) return Response.json(res[0]);
  else return NextResponse.json({ error: 'Task not found' }, { status: 404 });
}
