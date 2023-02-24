import { act, render } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import Menu from './Menu';

const MODAL_TEST_ID = 'MODAL';

describe('Menu Button', () => {
  let restartMock: jest.Mock, newSetupMock: jest.Mock, menuToggleMock: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();

    restartMock = jest.fn();
    newSetupMock = jest.fn();
    menuToggleMock = jest.fn();
  })

  it('should be defined', () => {
    expect(Menu).toBeDefined();
  });

  it('should render a trigger button', () => {
    const { getByText } = render(<Menu onRequestNewSetup={newSetupMock} onRestartGame={restartMock} />)

    expect(getByText('menu')).toBeInTheDocument();
  })

  it('should hide the modal on first render', () => {
    const { getByTestId } = render(<Menu onRequestNewSetup={newSetupMock} onRestartGame={restartMock} modalTestid={MODAL_TEST_ID} />)

    expect(getByTestId(MODAL_TEST_ID)).not.toHaveClass('isOpen');
  })

  it('should show the modal when the button is clicked', () => {
    const { getByTestId, getByText } = render(<Menu onRequestNewSetup={newSetupMock} onRestartGame={restartMock} onToggleMenu={menuToggleMock} modalTestid={MODAL_TEST_ID} />)

    fireEvent.click(getByText('menu'));

    expect(getByTestId(MODAL_TEST_ID)).toHaveClass('isOpen');
  })

  it.each([
    ['new game'],
    ['restart']
  ])('should trigger the correct callback when the $1 button is clicked.', (button) => {
    const { getByTestId, getByText, rerender } = render(<Menu onRequestNewSetup={newSetupMock} onRestartGame={restartMock} modalTestid={MODAL_TEST_ID} />)

    fireEvent.click(getByText('menu'));
    fireEvent.click(getByText(button))

    if (button === 'restart')
      expect(restartMock).toHaveBeenCalled();
    else
      expect(newSetupMock).toHaveBeenCalled();
  })

  it('should hide the modal when the resume button is clicked.', () => {
    const { getByTestId, getByText } = render(<Menu onRequestNewSetup={newSetupMock} onRestartGame={restartMock} modalTestid={MODAL_TEST_ID} />)

    fireEvent.click(getByText('menu'))
    fireEvent.click(getByText('resume'))

    expect(getByTestId(MODAL_TEST_ID)).not.toHaveClass('isOpen');
  })

  it('should trigger the menuToggle callback when the menu opens and closes.', () => {
    const { getByTestId, getByText } = render(<Menu onRequestNewSetup={newSetupMock} onRestartGame={restartMock} onToggleMenu={menuToggleMock} modalTestid={MODAL_TEST_ID} />)

    fireEvent.click(getByText('menu'));

    expect(getByTestId(MODAL_TEST_ID)).toHaveClass('isOpen');
    expect(menuToggleMock).toHaveBeenCalledTimes(1)
    expect(menuToggleMock).toHaveBeenLastCalledWith(true)

    fireEvent.click(getByText('resume'))

    expect(getByTestId(MODAL_TEST_ID)).not.toHaveClass('isOpen');
    expect(menuToggleMock).toHaveBeenCalledTimes(2)
    expect(menuToggleMock).toHaveBeenLastCalledWith(false)
  })
});
