import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../Button';
import PlayerCard from '../PlayerCard';
import Modal from './Modal'

export default {
  title: 'Modal',
  component: Modal,
  args: {
    isOpen: true,
  },
  argTypes: {
    dataTestid: { table: { disable: true } },
    children: { table: { disable: true } }
  }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal>  = (props) => {
  return (
    <Modal
      {...props}
    >
      <div style={{margin: '10px 0'}}><PlayerCard label="First Card" info="info" ariaLabel="First Card"  /></div>
      <div style={{margin: '10px 0'}}><PlayerCard label="Second Card" info="info" ariaLabel="Second Card"  /></div>
      <div style={{margin: '10px 0'}}><PlayerCard label="Third Card" info="info" ariaLabel="Third Card"  /></div>
      <Button
        size="medium"
      >
        Test
      </Button>
    </Modal>
  )
}

export const Usage = Template.bind({});
