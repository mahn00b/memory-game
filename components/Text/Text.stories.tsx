import Text from './Text'

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    cheadingildren: { table: { disable: true } },
  },
  args: {
    text: 'Test Text'
  }
};

const Template = ({
  text,
  level
}: any) => (
  <Text level={level} >{text}</Text>
)

export const heading1 = Template.bind({});

heading1.args = { level: 'heading1' };

export const heading2 = Template.bind({});

heading2.args = { level: 'heading2' };

export const heading3 = Template.bind({});

heading3.args = { level: 'heading3' };

export const body = Template.bind({});

body.args = { level: 'p' };
