import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BannerProps } from '.'
// eslint-disable-next-line import/no-duplicates
import Banner from '.'

const meta: Meta<typeof Banner> = {
  title: 'molecules/Banner',
  tags: ['autodocs'],
  component: Banner,
}

export default meta
type Story = StoryObj<typeof Banner>
const Template: Story<BannerProps> = (args) => <Banner {...args} />

export const Primary: Story = {
  render: () => <Banner />,
}

export const OnClick = Template.bind({})
OnClick.args = {
  clickHandler: () => {
    action('Learn more clicked')('Button on Banner clicked')
  },
}
