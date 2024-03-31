'use server';
import { TaskT } from '@/types/task';
import { db } from '.';
import { redirect } from 'next/navigation';
import { FilterParamsT } from '@/types/filter-params';
import { Prisma } from '@prisma/client';
import { z } from 'zod';

export async function getTasks(filterParams?: FilterParamsT): Promise<TaskT[]> {
  const where: Prisma.TaskWhereInput = {};
  const orderBy: Prisma.TaskOrderByWithRelationInput[] = [
    { status: 'asc' },
    { priority: 'desc' },
  ];

  if (filterParams?.search)
    where.name = { contains: filterParams.search, mode: 'insensitive' };

  if (filterParams?.status === 'true') {
    where.status = true;
  } else if (filterParams?.status === 'false') {
    where.status = false;
  }

  if (filterParams?.priorityOrder)
    orderBy[1].priority = filterParams.priorityOrder === 'asc' ? 'asc' : 'desc';

  return await db.task.findMany({
    where,
    orderBy,
  });
}

const addTaskSchema = z.object({
  name: z.string().min(3),
  priority: z.number().min(1).max(5),
});

export async function addTask(
  _state: { message: { other?: string; name?: string; priority?: string } },
  payload: FormData
): Promise<{ message: { other?: string; name?: string; priority?: string } }> {
  const data = {
    name: payload.get('name') as string,
    priority: parseInt(payload.get('priority') as string),
  };
  const parseRes = addTaskSchema.safeParse(data);

  if (!parseRes.success) {
    return {
      message: {
        name: parseRes.error.flatten().fieldErrors.name?.join(','),
        priority: parseRes.error.flatten().fieldErrors.priority?.join(','),
      },
    };
  } else {
    const res = await db.task.create({ data });

    if ('message' in res)
      return { message: { other: 'Something went wrong, please try later' } };
    else redirect('/');
  }
}

export async function updateTaskStatus(
  _state: { message: string },
  payload: FormData
): Promise<{ message: string }> {
  const id = payload.get('id') as string;
  const status = (payload.get('status') as string) === 'true';

  const res = await db.task.update({ where: { id }, data: { status } });

  if ('message' in res)
    return { message: 'Something went wrong, please try later' };
  else redirect('/');
}

export async function deleteTask(
  _state: { message: string },
  payload: FormData
): Promise<{ message: string }> {
  const id = payload.get('id') as string;

  const res = await db.task.delete({ where: { id } });

  if ('message' in res)
    return { message: 'Something went wrong, please try later' };
  else redirect('/');
}
