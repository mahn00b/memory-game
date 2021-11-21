import Button from '../Button';
import PlayerCard from '../PlayerCard';
import Modal, { ModalProps } from './Modal'

export default {
  title: 'Modal',
  component: Modal,
  args: {
    isOpen: true,
  }
}

const Template = ({
  isOpen
}: ModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
    >
      <div style={{margin: '10px 0'}}><PlayerCard label="First Card" info="info" ariaLabel="First Card"  /></div>
      <div style={{margin: '10px 0'}}><PlayerCard label="First Card" info="info" ariaLabel="First Card"  /></div>
      <div style={{margin: '10px 0'}}><PlayerCard label="First Card" info="info" ariaLabel="First Card"  /></div>
      <Button
        size="medium"
      >
        Test
      </Button>
    </Modal>
  )
}

export const Usage = Template.bind({});
