import cx from 'classnames';
import styles from './PlayerCard.module.scss';

export interface PlayerCardProps {
  /** The accessibility description for this area. */
  ariaLabel: string;
  /** The information displayed on the right of the player card */
  info: string;
  /** The label the appears on the left side of the card */
  label: string;
  /** Toggles the state of the card */
  state: 'active' | 'inactive';
  /** Add support for tabbing
   * @default false
  */
  tabable?: boolean
};

const PlayerCard: React.FC<PlayerCardProps> = ({
  ariaLabel,
  info,
  label,
  state,
  tabable,
}: PlayerCardProps) => (
  <div
    className={cx(styles.PlayerCard, styles[state])}
    aria-label={ariaLabel}
    tabIndex={tabable && 0 || undefined}
  >
    <label className={styles.label}>{label}</label>
    <p className={styles.info}>{info}</p>
  </div>
)

export default PlayerCard;
