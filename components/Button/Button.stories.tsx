import Button from './Button';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    children: { table: { disable: true }},
    size: {
      options: ['small', 'medium', 'large']
    },
    theme: {
      options: ['menu', 'primary', 'secondary']
    },
    active: {
      control: 'boolean'
    }
  },
  args: {
    active: false,
    size: 'small'
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} >1</Button>

export const Menu = Template.bind({});

Menu.args = {
  theme: 'menu',
}

export const Primary = Template.bind({});

Primary.args = {
  theme: 'primary',
}

export const Secondary = Template.bind({});

Secondary.args = {
  theme: 'secondary',
}

export const Medium = Template.bind({});

Medium.args = {
  theme: 'menu',
  size: 'medium',
  active: true
}

export const Large = Template.bind({});

Large.args = {
  theme: 'primary',
  size: 'large'
}
