import Timer from './Timer';

export default {
  title: 'Containers / Timer',
  component: Timer,
  argTypes: {
    pause: {
      name: 'Pause',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'overwritten description',
      control: {
        type: 'boolean',
      }
    }
  }
}

const Template = (args: any) => {
  return (
  <div style={{ maxWidth: 250 }}>
    <Timer {...args} />
  </div>
  )
}

export const Default = Template.bind({})
