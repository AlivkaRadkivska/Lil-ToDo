import type { Meta, StoryObj } from '@storybook/react';
import { ErrString } from '@/components/error-string';

const meta = {
  title: 'UI/Error string',
  component: ErrString,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'There is some error',
  },
} satisfies Meta<typeof ErrString>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
