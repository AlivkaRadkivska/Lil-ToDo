import type { Meta, StoryObj } from '@storybook/react';
import { SearchForm } from '@/components/search-form';

const meta = {
  title: 'Layout/Task searching',
  component: SearchForm,
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#64748B' }],
    },
  },
  tags: ['autodocs'],
  args: {
    prevSearch: '',
  },
} satisfies Meta<typeof SearchForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
