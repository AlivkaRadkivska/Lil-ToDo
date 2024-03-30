export interface FilterParamsT {
  search?: string;
  priorityOrder?: string;
  status?: string;
}

export const statusOptions = [
  { name: 'All', value: 'all' },
  { name: 'Undone', value: 'false' },
  { name: 'Done', value: 'true' },
];
export const priorityOptions = [
  { name: 'Descending', value: 'desc' },
  { name: 'Ascending', value: 'asc' },
];
