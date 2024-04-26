import { NewTaskForm } from '@/components/new-task-form';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Layout/Task adding',
  component: NewTaskForm,
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#64748B' }],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NewTaskForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
