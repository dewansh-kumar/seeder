import React from 'react'
import { Story, Meta } from '@storybook/react'
import NewCashCardKick, { CardProps } from '.'
import { action } from '@storybook/addon-actions'

export default {
  title: 'molecules/NewCashCardKick',
  component: NewCashCardKick,
  tags: ['autodocs'],
} as Meta

const Template: Story<CardProps> = (args) => (
  <NewCashCardKick {...args} handleOnClick={action('button clicked')} />
)

export const Default = Template.bind({})
Default.args = {
  availableCash: 709546.0,
  width: '500px',
  height: 'auto',
  handleOnClick: () => {
    action('default card clicked')('Button on default card clicked')
  },
}
