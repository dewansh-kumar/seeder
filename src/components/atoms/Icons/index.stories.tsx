import type { Meta, StoryObj } from '@storybook/react'
import Icons from '.'
import Logo from '../../../../public/assests/icons/SeederLogo.svg'

const meta: Meta<typeof Icons> = {
  title: 'atoms/Icons',
  component: Icons,
  tags: ['autodocs'],
  argTypes: { clickHandler: { action: 'clicked' } },
}

export default meta

type Story = StoryObj<typeof Icons>

export const Primary: Story = {
  render: () => <Icons src={Logo} alt="logo" />,
}

export const Secondary: Story = {
  args: {
    src: Logo,
    width: '44px',
    height: '44px',
  },
}

export const ClickableIcon: Story = {
  args: {
    src: Logo,
    width: '24px',
    height: '24px',
  },
}
