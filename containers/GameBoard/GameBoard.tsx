import { useEffect, useState, ReactNode } from 'react';
import cx from 'classnames';
import GridTile from '../../components/GridTile';
import styles from './GameBoard.module.scss';

export interface GameBoardProps {
  config: GameConfig;
  /** A callback function that is called when the user clicks a single tile. */
  onClickTile?: (value?: number, isMatch?: boolean) => void;
  /** A callback function that is called when all tiles have been matched. */
  onAllMatched?: (reset?: () => void)=> void;
  /** A string used to target the element during testing. */
  dataTestid?: string;
}

interface TileState {
  selected: boolean;
  value: number;
  symbol: ReactNode;
  active: boolean;
}

/** Generates a random order of numbers based on the size of the grid. */
function generateRandomOrder(size: number): number[] {
  const array = []

  /* Generating an array of random pairs of numbers to be the grid values.  */
  for (let i = 1; i <= (size * 2); i++) array.push(...[i, i]);


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

const GameBoard =  ({
  config: {
    gridSize
  },
  onClickTile = () => {},
  onAllMatched = () => {},
  dataTestid
}: GameBoardProps) => {
  const [size] = useState(gridSize === 6 ? 'six' : 'four');
  const [firstSelection, setFirstSelection] = useState<number | null>(null);
  const [secondSelection, setSeconSelction] = useState<number | null>(null);
  const [numMatches, setNumMatches] = useState<number>(0)
  const [tiles, setTiles] = useState<TileState[]>([]);

  useEffect(() => {
    resetBoard();
  }, []);

  const resetBoard = () => {
    setTiles(
      generateRandomOrder(gridSize)
      .map((value) => ({
        active: false,
        selected: false,
        symbol: value, /** TODO: Toggle number / icons based on game config */
        value,
      }))
    );
  }

  const resetSelection = (first: number, second: number, isMatch: boolean) => {
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
    setSeconSelction(null);
    setTiles(tiles);
    if (numMatches === (gridSize * 2) - 1) onAllMatched(resetBoard)
  }

  const handleSelection = (index: number) => {
    if (index === firstSelection || secondSelection) return

    tiles[index].selected = true
    tiles[index].active = true

    if (firstSelection !== null) {
        setSeconSelction(index)
        const isMatch = tiles[firstSelection].value === tiles[index].value;
        if (isMatch) {
           setNumMatches(numMatches + 1)
        }

        onClickTile(tiles[index].value, isMatch)

        setTimeout(() => {
          resetSelection(firstSelection, index, isMatch)
        }, 500)
    } else {
      onClickTile(tiles[index].value, false)

      setFirstSelection(index)
    }
  }

  return (
    <div className={cx(styles.GameBoard, styles[size])} data-testid={dataTestid} >
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
            key={JSON.stringify({ symbol, index })}
          >
            {symbol}
          </GridTile>
      </div>))}
    </div>
  )
};

export default GameBoard;
