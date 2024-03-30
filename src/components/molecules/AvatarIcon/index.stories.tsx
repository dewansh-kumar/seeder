import { Meta, StoryObj } from '@storybook/react'
import Avtar from '.'

const meta: Meta<typeof Avtar> = {
  title: 'Molecules/AvtarIcon',
  component: Avtar,
  tags: ['autodocs'],
}
type Story = StoryObj<typeof Avtar>

export const AvtarWithPic: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80',
    alt: 'Avtar Photo',
  },
}

export const AvtarWithOutPic: Story = {
  args: {
    alt: 'Avtar Photo',
  },
}

export default meta
