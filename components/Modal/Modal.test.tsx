import { render } from '@testing-library/react'
import Modal from './Modal';

describe('Modal', () => {
  it('should be defined.', () => {
    expect(Modal).toBeDefined();
  })

  it('should be closed when isOpen is set to false.', () => {
    const { queryByTestId } = render(
      <Modal isOpen={false} dataTestid="TEST_ID">
        <div>test</div>
      </Modal>
    )

    expect(queryByTestId('TEST_ID')).not.toHaveClass('isOpen');
  })

  it('should be open when isOpen is set to true.', () => {
    const { getByTestId, getByText } = render(
      <Modal isOpen={true} dataTestid="TEST_ID">
        <div>test</div>
      </Modal>
    )

    expect(getByTestId('TEST_ID')).toHaveClass('isOpen');
  })
})