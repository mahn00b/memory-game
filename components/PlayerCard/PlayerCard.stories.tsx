import type { ComponentMeta, ComponentStory } from '@storybook/react';
import PlayerCard from './PlayerCard';

export default {
  component: PlayerCard,
  title: 'PlayerCard',
  args: {
    ariaLabel: 'Storybook illustrative example',
    label: 'Player 1',
    info: '360',
    active: false,
    tabable: false,
  },
  argTypes: {
    ariaLabel: { table: { disable: true } }
  }
} as ComponentMeta<typeof PlayerCard>

const Template: ComponentStory<typeof PlayerCard> = (args) =>
  <div style={{ maxWidth: '250px' } }><PlayerCard {...args} /></div>


export const Inactive = Template.bind({});

export const Active = Template.bind({});

Active.args = {
  active: true,
}

export const Highlighted = Template.bind({});

Highlighted.args = {
  highlight: true,
}
