import { Meta, Story } from '@storybook/react'
import Text, { TextProps } from '.'

export default {
  title: 'Atoms/Typography',
  tags: ['autodocs'],
  component: Text,
  argTypes: {
    sx: { control: 'object' },
  },
} as Meta

const Template: Story<TextProps> = (args) => <Text {...args} />

export const Title = Template.bind({})
Title.args = {
  variant: 'title',
  textBody: 'Title Text',
}

export const Heading1 = Template.bind({})
Heading1.args = {
  variant: 'heading1',
  textBody: 'Heading 1 Text',
}

export const Heading2 = Template.bind({})
Heading2.args = {
  variant: 'heading2',
  textBody: 'Heading 2 Text',
}

export const Body1 = Template.bind({})
Body1.args = {
  variant: 'body1',
  textBody: 'Body 1 Text',
}

export const Body2 = Template.bind({})
Body2.args = {
  variant: 'body2',
  textBody: 'Body 2 Text',
}

export const Caption = Template.bind({})
Caption.args = {
  variant: 'caption',
  textBody: 'Caption Text',
}

export const Button = Template.bind({})
Button.args = {
  variant: 'button',
  textBody: 'Button Text',
}
