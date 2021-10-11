import GridTile, { GridTileProps } from './GridTile';

export default {
  component: GridTile,
  title: 'GridTile',
  args: {
    text: '1',
    state: 'active',
    onClick: () => {},
  },
  argTypes: {
    onClick: { table: { disable: true } }
  }
}

interface Args extends GridTileProps {
  text: string
}

const Template = ({ text, ...rest }: Args) =>
  <div style={{ width: '45px', height: '45px'} }><GridTile {...rest} >{text}</GridTile></div>


export const Active = Template.bind({});

export const Inactive = Template.bind({});

Inactive.args = {
  state: 'inactive',
}

export const Hidden = Template.bind({});

Hidden.args = {
  state: 'hidden'
}
