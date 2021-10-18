import PlayerCard, { PlayerCardProps } from './PlayerCard';

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
}

const Template = (args: PlayerCardProps) =>
  <div style={{ maxWidth: '250px' } }><PlayerCard {...args} /></div>


export const Inactive = Template.bind({});

export const Active = Template.bind({});

Active.args = {
  active: true,
}
