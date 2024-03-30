import { Meta, StoryObj } from '@storybook/react'
import CardPayment from '.'

const meta: Meta<typeof CardPayment> = {
  title: 'Molecules/CardPayment',
  component: CardPayment,
  tags: ['autodocs'],
}
type Story = StoryObj<typeof CardPayment>

export const CardDataPayment: Story = {
  args: {
    label: 'Due - May 03, 2021',
    amount: '$14,204.55',
    width: '250px',
    height: 'auto',
  },
}

export default meta