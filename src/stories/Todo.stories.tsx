import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import {Todo, TodoProps} from './Todo'

export default {
      title: 'Todo',
      component: Todo,
      argTypes: {
            backgroundColor: { control: 'color' },
            color: {control: 'color'},
            checkBoxColor: {control: 'color'}
          }
} as Meta

const Template: Story<TodoProps> = args => <Todo {...args} />

export const Default = Template.bind({})
Default.args = {
      id: 1,
      title: 'I am todo item',
      completed: false,
      size: 'large'
}

export const Completed  = Template.bind({})
Completed.args = {
      ...Default.args,
      completed: true,
      size: 'medium'
}