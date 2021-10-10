import Button, { ButtonProps } from './Button';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    children: { table: { disable: true }}
  },
  args: {
    active: false,
    size: 'small'
  }
}

const Template = (args: ButtonProps): any => <Button {...args} >Start Game</Button>

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

export const Big = Template.bind({});

Big.args = {
  theme: 'primary',
  size: 'big'
}
