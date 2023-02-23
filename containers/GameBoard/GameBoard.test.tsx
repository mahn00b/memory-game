import { render, act } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import GameBoard, { GameBoardProps } from './GameBoard';
import { SinglePlayerConfig } from '../../test/fixtures'

describe('GameBoard', () => {
  let DEFAULT_PROPS: GameBoardProps;

  beforeEach(() => {
    DEFAULT_PROPS = {
      config: { ...SinglePlayerConfig },
      onClickTile: jest.fn(),
      onAllMatched: jest.fn(),
      dataTestid: 'GAME_BOARD'
    }

    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks()

    jest.clearAllTimers()
    jest.useRealTimers()
  })

  it('should be defined', () => {
    expect(GameBoard).toBeDefined();
  });

  it.each([[4, 16], [6, 36]])('should render $1 tiles if the gridSize is set to $0',
  (size, amount) => {
    const props: GameBoardProps = {
      ...DEFAULT_PROPS,
      config: {
        ...SinglePlayerConfig,
        gridSize: size as GameConfig['gridSize'],
      }
    }

    const { getAllByRole } = render(<GameBoard {...props}  />)

    expect(getAllByRole('button').length).toBe(amount);
  });

  it('should trigger the onClickTile callback when a tile is clicked', () => {
    const mock = jest.fn();
    const props: GameBoardProps = {
      ...DEFAULT_PROPS,
    }

    const { getAllByRole } = render(<GameBoard {...props} onClickTile={mock} />)

    const tile = getAllByRole('button')[0];
    act(() => {
      fireEvent.click(tile);
    })

    expect(mock).toHaveBeenCalledWith(Number(tile.innerHTML), false);
  });

  it('should pass false to the onClickTile callback\'s second argument if selected tiles don\'t match.', () => {
    const mock = jest.fn();
    const props: GameBoardProps = {
      ...DEFAULT_PROPS,
    }

    const { getAllByText } = render(<GameBoard {...props} onClickTile={mock} />)

    const oneTile = getAllByText('1')[0];
    const twoTile = getAllByText('2')[0];

    act(() => {
      fireEvent.click(oneTile);
      fireEvent.click(twoTile);
    })

    expect(mock).toHaveBeenCalledTimes(2);
    expect(mock).toHaveBeenCalledWith(1, false);
    expect(mock).toHaveBeenCalledWith(2, false);
  });

  it('should pass true to the onClickTile callback\'s second argument if selected tiles match.', () => {
    const mock = jest.fn();
    const props: GameBoardProps = {
      ...DEFAULT_PROPS,
    }

    const { getAllByText } = render(<GameBoard {...props} onClickTile={mock} />)

    const tiles = getAllByText('1');

    fireEvent.click(tiles[0]);
    fireEvent.click(tiles[1]);

    expect(mock).toHaveBeenCalledTimes(2);
    expect(mock).toHaveBeenCalledWith(1, false);
    expect(mock).toHaveBeenCalledWith(1, true);
  });

  it('should trigger the onAllMatched callback when all tiles have been matched.', () => {
    const mock = jest.fn();
    const props: GameBoardProps = {
      ...DEFAULT_PROPS,
    }

    const { getAllByText, rerender } = render(<GameBoard {...props} onAllMatched={mock} />)

    for(let i = 1; i <= 8; i++) {
      const tiles = getAllByText(`${i}`)
        fireEvent.click(tiles[0]);
        jest.runAllTimers()
        rerender(<GameBoard {...props} onAllMatched={mock} />);

        fireEvent.click(tiles[1]);
        jest.runAllTimers()
        rerender(<GameBoard {...props} onAllMatched={mock} />);

    }

    expect(mock).toHaveBeenCalled();
  });
});
