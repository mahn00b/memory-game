import Text from './Text'
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Text',
  component: Text,
  argTypes: {
     children: { table: { disable: true } },
     dataTestid: { table: { disable: true } },
     level: {
      options: ['h1', 'h2', 'h3', 'p']
    },
  },
  args: {
    text: 'Test Text',
  }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = ({
  text,
  level
}: any) => (
  <Text level={level} >{text}</Text>
)

export const heading1 = Template.bind({});

heading1.args = { level: 'h1' };

export const heading2 = Template.bind({});

heading2.args = { level: 'h2' };

export const heading3 = Template.bind({});

heading3.args = { level: 'h3' };

export const body = Template.bind({});

body.args = { level: 'p' };
