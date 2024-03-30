// eslint-disable-next-line @typescript-eslint/no-unused-vars
import CelebrationImage from '../../../../public/assests/images/celebration.svg'

import type { Meta, StoryObj } from '@storybook/react'

import Images from '../Images/index'

const meta: Meta<typeof Images> = {
  title: 'atoms/Images',
  tags: ['autodocs'],
  component: Images,
}

export default meta
type Story = StoryObj<typeof Images>

export const Primary: Story = {
  render: () => <Images src={CelebrationImage} alt="banner" />,
}
