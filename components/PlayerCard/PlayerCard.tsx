import cx from 'classnames';
import styles from './PlayerCard.module.scss';

export interface PlayerCardProps {
  /** Toggles the state of the card */
  active?: boolean;
  /** Highlight the card rather than simply activating */
  highlight?: boolean;
  /** The accessibility description for this area. */
  ariaLabel: string;
  /** The information displayed on the right of the player card */
  info: string;
  /** The label the appears on the left side of the card */
  label: string;
  /** Add support for tabbing
   * @default false
  */
  tabable?: boolean
  /** A string passed into the data-testid property of the parent element. */
  testId?: string
};

const PlayerCard: React.FC<PlayerCardProps> = ({
  ariaLabel,
  info,
  label,
  highlight,
  active,
  tabable,
  testId,
}: PlayerCardProps) => (
  <div
    className={cx(styles.PlayerCard, { [styles.active]: active, [styles.highlight]: highlight })}
    aria-label={ariaLabel}
    tabIndex={tabable ? 0 : undefined}
    data-testid={testId}
  >
    {active && <div className={styles.triangle} />}
    <label className={styles.label}>{label}</label>
    <p className={styles.info}>{info}</p>
  </div>
)

PlayerCard.displayName = 'PlayerCard';

export default PlayerCard;
