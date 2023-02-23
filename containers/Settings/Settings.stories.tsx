import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Settings from './Settings';
import styles from './Settings.module.scss';

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
} as ComponentMeta<typeof Settings>

const Template: ComponentStory<typeof Settings> = (props) => <div className={styles.StoryContainer} ><Settings {...props} /></div>

export const Default = Template.bind({});
