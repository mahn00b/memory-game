import Settings, { SettingsProps } from './Settings';

export default {
  component: Settings,
  title: 'Containers/Settings',
  argTypes: {
    onSelectSettings: { table: { disable: true } },
    open: {
      name: 'Open',
      description: 'Toggles the open/close state of the settings dialog.',
      control: {
        type: 'boolean'
      }
    }
  }
}

const Template = (props: SettingsProps) => <Settings {...props} />

export const Default = Template.bind({});
