import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Chip, ChipProps } from '@mui/material'
import theme from '../../../themes'
import { action } from '@storybook/addon-actions'
export default {
  title: 'Atoms/Chip',
  component: Chip,
} as Meta

const Template: Story<ChipProps> = (args) => <Chip {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Sample Chip',
  variant: 'outlined',
}

export const Upcoming = Template.bind({})
Upcoming.args = {
  label: 'Upcoming',
  variant: 'filled',
  style: {
    borderRadius: '4px',
    backgroundColor: theme.palette.background.backgroundElevation2,
    color: theme.palette.primary.primaryTextMidEmp,
  },
}

export const Due = Template.bind({})

Due.args = {
  label: 'Due in 30 (day)s',
  variant: 'filled',
  style: {
    borderRadius: '4px',
    backgroundColor: theme.palette.background.accent,
    color: theme.palette.background.backgroundElevation1,
  },
}
export const ClickableChip = Template.bind({})
ClickableChip.args = {
  label: 'click here',
  variant: 'outlined',
  onClick: action('Chip clicked!'),
}
