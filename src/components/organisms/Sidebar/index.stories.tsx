import { Meta, StoryObj } from '@storybook/react'
import Sidebar from './index'
import { BrowserRouter } from 'react-router-dom'

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: 'organisms/Sidebar',
  tags: ['autodocs'],
}

export default meta

type story = StoryObj<typeof Sidebar>

export const Default: story = {
  render: () => (
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  ),
}
