import type { Meta, StoryObj } from '@storybook/react'
import CardData from '.'

const meta: Meta<typeof CardData> = {
  title: 'molecules/CardData',
  tags: ['autodocs'],
  component: CardData,
}

export default meta
type Story = StoryObj<typeof CardData>

export const Primary: Story = {
  render: () => <CardData />,
}
