import { useEffect, useState, memo } from 'react';
import cx from 'classnames';
import GridTile from '../../components/GridTile';
import styles from './GameBoard.styles.scss';

export interface GameBoardProps {
  config: GameConfig;
  onSelectMatch?: (value: number) => void;
  onAllMatched?: (reset: () => void)=> void;
  matchDelay?: number;
}

interface TileState {
  selected: boolean;
  value: number;
  symbol: React.ReactNode;
  active: boolean;
}

/** Generates a random order of numbers based on the size of the grid. */
function generateRandomOrder(size: number): number[] {
  const array = []

  /* Generating an array of random pairs of numbers to be the grid values.  */
  for (let i = 1; i <= size; i++) array[i - 1] = i > size ?  i - size : i;


  let tmp, current, top = array.length;

  if (top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }

  return array;
}

const determineTileState = (active: boolean, selected: boolean): 'active' | 'hidden' | 'inactive' => {
  if (active) return 'active'

  if (selected && !active) return 'inactive';

  return 'hidden'
}

const GameBoard =  memo(({
  config: {
    gridSize
  },
  onSelectMatch = () => {},
  onAllMatched = () => {}
}: GameBoardProps) => {
  const [size] = useState(gridSize === 6 ? 'six' : 'four');
  const [firstSelection, setFirstSelection] = useState<number | null>(null);
  const [_, setSecondSelection] = useState<number | null>(null);
  const [numMatches, setNumMatches] = useState<number>(0)
  const [tiles, setTiles] = useState<TileState[]>([]);

  useEffect(() => {
    resetBoard();
  }, []);

  const resetBoard = () => {
    setTiles(
      generateRandomOrder(gridSize ** 2)
      .map((value) => ({
        active: false,
        selected: false,
        symbol: value, /** TODO: Toggle number / icons based on game config */
        value,
      }))
    );
  }

  const resetSelection = (first: number, second: number) => {
    const isMatch = tiles[first].value === tiles[second].value;

    if (isMatch) {
      onSelectMatch(tiles[first].value)
      setNumMatches(numMatches + 1)
    }

    tiles[first] = {
      ...tiles[first],
      selected: isMatch,
      active: false,
    }

    tiles[second] = {
      ...tiles[second],
      selected: isMatch,
      active: false,
    }

    setFirstSelection(null);
    setSecondSelection(null)
    setTiles(tiles);

    if (numMatches === (gridSize * 2)) onAllMatched(resetBoard)
  }

  const handleSelection = (index: number) => {
    if (index === firstSelection) return

    tiles[index].selected = true
    tiles[index].active = true

    if (firstSelection !== null) {
        setSecondSelection(index)

        setTimeout(() => {
          resetSelection(firstSelection, index)
        }, 500)
    } else {
      setFirstSelection(index)
    }
  }

  return (
    <div className={cx(styles.GameBoard, styles[size])}>
      {tiles.map(({
        active,
        selected,
        symbol
      }, index) =>(
        <div className={cx(styles.tile, styles[size])}>
          <GridTile
            state={determineTileState(active, selected)}
            onClick={handleSelection}
            disabled={!active && selected}
            value={index}
            ariaLabel={`This tile contains ${symbol}`}
          >
            {symbol}
          </GridTile>
      </div>))}
    </div>
  )
});

export default GameBoard;
