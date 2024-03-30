import React from 'react'
import { Story, Meta } from '@storybook/react'
import SummaryBox1, { SummaryBoxProps } from '.'

export default {
  title: 'Organisms/SummaryBox',
  component: SummaryBox1,
  tags: ['autodocs'],
} as Meta

const Template: Story<SummaryBoxProps> = (args) => <SummaryBox1 {...args} />

export const Default = Template.bind({})
Default.args = {
  handleOnClick2: () => {
    //
  },
  height: 'auto',
  numberOfSelectedContracts: 2,
  onSilderChangeHandler: () => {
    //
  },
  term: '12 months',
  totalSelectedAmount: 18000,
  totalValue: 120300,
  width: '300px',
}
