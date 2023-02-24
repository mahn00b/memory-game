import type { ComponentStory, ComponentMeta } from '@storybook/react';
import SettingsPage from './SettingsPage';

export default {
  component: SettingsPage,
  title: 'Views/Settings Page',
  argTypes: {}
} as ComponentMeta<typeof SettingsPage>

const Template: ComponentStory<typeof SettingsPage> = () => <SettingsPage />

export const Default = Template.bind({});
