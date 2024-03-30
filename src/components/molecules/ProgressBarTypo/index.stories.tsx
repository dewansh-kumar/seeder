import { Meta, StoryObj } from '@storybook/react'
import ProgressBar from '.'

const meta: Meta<typeof ProgressBar> = {
  title: 'Molecules/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
}
type Story = StoryObj<typeof ProgressBar>

export const ProgressBarT: Story = {
  args: {
    label: 'Outstanding amount',
    amount: '$170,454.55',
    value: 10,
    width: '250px',
    height: 'auto',
  },
}

export default meta
