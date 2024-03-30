import { Story, Meta } from '@storybook/react'
import { Slide, SliderProps } from '../Slider/index'

export default {
  title: 'atoms/Slider',
  component: Slide,
} as Meta

const Template: Story<SliderProps> = (args: SliderProps) => <Slide {...args} />

export const Default = Template.bind({})
Default.args = {
  value: 50,
  maxValue: 100,
  onChange: (value: number) => `${value}%`,
  onSilderChange: (event: Event, newValue: number | number[]) => {
    console.log(newValue)
  },
}
