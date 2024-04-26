import type { Meta, StoryObj } from '@storybook/react';
import { Task } from '@/components/task';

const meta = {
  title: 'Layout/Task',
  component: Task,
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#1E293B' }],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Task>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Undone: Story = {
  args: {
    task: {
      id: '6382g4bdw78-437rh38',
      name: 'To do task',
      priority: 4,
      status: false,
    },
  },
};

export const Done: Story = {
  args: {
    task: {
      id: '6382g4bdw78-437rh38',
      name: 'To do task',
      priority: 4,
      status: true,
    },
  },
};
