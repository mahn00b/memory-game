import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Menu from './Menu';

export default {
  component: Menu,
  title: 'Containers/Menu Button',
  argTypes: {
    onRequestNewSetup: { table: { disable: true } },
    onRestartGame: { table: { disable: true } },
    onToggleMenu: { table: { disable: true } },
  }
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = () => <Menu />

export const Default = Template.bind({});
