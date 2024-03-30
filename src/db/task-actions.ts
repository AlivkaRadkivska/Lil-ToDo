'use server';
import { TaskT } from '@/types/task';
import { db } from '.';
import { redirect } from 'next/navigation';
import { FilterParamsT } from '@/types/filter-params';
import { Prisma } from '@prisma/client';

export async function getTasks(filterParams?: FilterParamsT): Promise<TaskT[]> {
  const where: Prisma.TaskWhereInput = {};
  const orderBy: Prisma.TaskOrderByWithRelationInput = { priority: 'desc' };

  if (filterParams?.search) where.name = { contains: filterParams.search };

  if (filterParams?.status === 'true') {
    where.status = true;
  } else if (filterParams?.status === 'false') {
    where.status = false;
  }

  if (filterParams?.priorityOrder)
    orderBy.priority = filterParams.priorityOrder === 'asc' ? 'asc' : 'desc';

  return await db.task.findMany({
    where,
    orderBy,
  });
}

export async function addTask(
  _state: { message: string[] },
  payload: FormData
): Promise<{ message: string[] }> {
  const data = {
    name: payload.get('name') as string,
    priority: parseInt(payload.get('priority') as string),
  };

  const res = await db.task.create({ data });

  if ('message' in res)
    return { message: ['Something went wrong, please try later'] };
  else redirect('/');
}

export async function updateTaskStatus(
  _state: { message: string[] },
  payload: FormData
): Promise<{ message: string[] }> {
  const id = payload.get('id') as string;
  const status = (payload.get('status') as string) === 'true';

  const res = await db.task.update({ where: { id }, data: { status } });

  if ('message' in res)
    return { message: ['Something went wrong, please try later'] };
  else redirect('/');
}

export async function deleteTask(
  _state: { message: string[] },
  payload: FormData
): Promise<{ message: string[] }> {
  const id = payload.get('id') as string;

  const res = await db.task.delete({ where: { id } });

  if ('message' in res)
    return { message: ['Something went wrong, please try later'] };
  else redirect('/');
}
