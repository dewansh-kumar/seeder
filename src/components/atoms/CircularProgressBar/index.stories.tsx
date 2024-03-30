import { Meta, StoryObj } from '@storybook/react'
import CircularProgressWithLabel from '.'

const meta: Meta<typeof CircularProgressWithLabel> = {
  title: 'Atoms/CircularProgress',
  component: CircularProgressWithLabel,
  tags: ['autodocs'],
}
type Story = StoryObj<typeof CircularProgressWithLabel>

export const CircularProgress: Story = {
  args: { value: 10 },
}

export default meta
