import { render } from '@testing-library/react';
import fireEvent from '@testing-library/user-event'
import Settings from './Settings';

describe('Settings', () => {
  it('should be defined', () => {
    expect(Settings).toBeDefined()
  })

  it.each([
    ['theme', 'icons'],
    ['numberOfPlayers', '2'],
    ['gridSize', '6x6']
  ])('Should set the corresponding button to active when a setting is clicked for $1', (_settingName, buttonText) => {
      const { getByText } = render(<Settings open={true} onSelectSettings={jest.fn()} />)

      const setting = getByText(buttonText)

      fireEvent.click(setting)

      expect(setting).toHaveClass('active');
  })

  it('should return the correct selected settings', () => {
    const settingButtons = ['icons', '2', '6x6'];
    const mockCallback = jest.fn();

    const { getByText } = render(<Settings open={true} onSelectSettings={mockCallback} />)

    settingButtons.forEach((settingName: string) => {
        const setting = getByText(settingName);

        fireEvent.click(setting);
    })

    const submit = getByText('start game');
    fireEvent.click(submit)

    expect(mockCallback).toHaveBeenCalled();

    const finalConfig: GameConfig = mockCallback.mock.calls[0][0]

    expect(finalConfig.numberOfPlayers).toBe(2);
    expect(finalConfig.gridSize).toBe(6);
    expect(finalConfig.symbols).toBe(true);
  })
});
