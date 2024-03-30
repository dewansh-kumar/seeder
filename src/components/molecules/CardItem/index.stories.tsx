import Calender from '../../../../public/assests/icons/calendar.svg'
import type { Meta, StoryObj } from '@storybook/react'

import CardItem from '.'

const meta: Meta<typeof CardItem> = {
  title: 'molecules/CardItems',
  tags: ['autodocs'],
  component: CardItem,
}

export default meta
type Story = StoryObj<typeof CardItem>

export const Primary: Story = {
  render: () => (
    <CardItem
      headingText="12 Months"
      subHeadingText="Term cap"
      iconSrc={Calender}
    />
  ),
}
export const Secondary: Story = {
  render: () => (
    <CardItem
      headingText="709.45K"
      subHeadingText="Available credit"
      iconSrc={Calender}
    />
  ),
}
export const Tertiary: Story = {
  render: () => (
    <CardItem
      headingText="12.00%"
      subHeadingText="Max Intrest Rate"
      iconSrc={Calender}
    />
  ),
}
