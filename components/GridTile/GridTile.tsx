import cx from 'classnames';
import styles from './GridTile.module.scss';

export interface GridTileProps {
  /** Label to attach to button for screen reader support. */
  ariaLabel: string;
  /** Accepts children to display it's value */
  children?: React.ReactNode;
  /** Disables pointer events for this tile.
   * @default false
  */
  disabled?: boolean
  /** Accepts a callback function which fires on click */
  onClick: (value: GridTileProps['value']) => void;
  /** The tile's state
   * @default 'hidden'
  */
  state?: 'hidden' | 'active' | 'inactive';
  /** A string passed into the data-testid property of the parent element. */
  testId?: string
  /** The value of this tile to be returned onClick */
  value: any;
}

const GridTile = ({
  ariaLabel,
  children,
  disabled,
  onClick,
  state = 'hidden',
  testId,
  value,
}: GridTileProps) => {

  const handleClick = () => {
    onClick(value)
  }

  return (
    <button
      aria-label={ariaLabel}
      className={cx(styles.GridTile, styles[state])}
      disabled={disabled}
      onClick={handleClick}
      data-testid={testId}
      role='button'
      >
      {children}
    </button>
  )

}

GridTile.displayName = 'GridTile';

export default GridTile;
