import { Meta, StoryObj } from '@storybook/react'
import SidebarElement from '.'
import HomeIcon from '../../../../public/assests/icons/HomeIcon.svg'
import CashAcclerationIcon from '../../../../public/assests/icons/CashAccleration.svg'
import FlashIcon from '../../../../public/assests/icons/FlashIcon.svg'

const meta: Meta<typeof SidebarElement> = {
  title: 'molecules/SideBarElement',
  component: SidebarElement,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof SidebarElement>

export const Home: Story = {
  args: {
    title: 'Home',
    active: true,
    icon: HomeIcon,
  },
}

export const CashAccleration: Story = {
  args: {
    title: 'Cash Accleration',
    active: false,
    icon: CashAcclerationIcon,
  },
}

export const WatchHow: Story = {
  args: {
    title: 'Watch how to',
    active: false,
    icon: FlashIcon,
  },
}

export default meta
