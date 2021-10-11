import cx from 'classnames';
import styles from './GridTile.module.scss';

export interface GridTileProps {
  /** Label to attach to button for screen reader support. */
  ariaLabel: string;
  /** Accepts children to display it's value */
  children: React.ReactNode;
  /** Disables pointer events for this tile.
   * @default false
  */
     disabled?: boolean
  /** Accepts a callback function which fires on click */
  onClick: () => void;
  /** The tile's state
   * @default 'hidden'
  */
  state?: 'hidden' | 'active' | 'inactive';
}

const GridTile: React.FC<GridTileProps> = ({
  ariaLabel,
  children,
  disabled,
  onClick,
  state = 'hidden',
}: GridTileProps) => (
  <button
    aria-label={ariaLabel}
    className={cx(styles.GridTile, styles[state])}
    disabled={disabled}
    onClick={onClick}>
    {children}
  </button>
)

GridTile.displayName = 'GridTile';

export default GridTile;
