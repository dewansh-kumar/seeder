import React from 'react'
import { Meta, Story } from '@storybook/react'
import TextButton, { ButtonPropsType } from '.'

import theme from '../../../themes'

export default {
  title: 'Atoms/TextButton',
  component: TextButton,
  argTypes: {
    variant: {
      options: ['text', 'contained', 'outlined'],
      control: { type: 'select' },
    },

    size: {
      options: ['large', 'small', 'medium'],
      control: { type: 'select' },
    },
    onClick: { action: 'clicked' },
  },

  disabled: {
    control: { type: 'boolean' },
  },
  decorators: [(Story) => <Story />],
} as Meta
const Template: Story<ButtonPropsType> = (args) => <TextButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'New Cash kick',
  variant: 'contained',

  size: 'large',
  style: {
    backgroundColor: theme.palette.primary.primaryAlphaPurple500,
    width: 276,
    height: 59,
    textTransform: 'none',
    borderRadius: theme.shape.borderRadius,
  },
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'New Cash kick',
  variant: 'contained',

  size: 'large',
  style: {
    width: 276,
    height: 59,
    textTransform: 'none',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.primary.primaryAlphaPurple500,
    opacity: '56%',
  },
  disabled: true,
}
