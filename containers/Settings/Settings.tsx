import { useState, MouseEventHandler } from 'react';
import cx from 'classnames';
import {
  Text,
  Button
} from '../../components';
import styles from './Settings.module.scss';

const THEME_SETTINGS = ['numbers', 'icons'];
const PLAYER_SETTINGS = [1, 2, 3, 4];
const GRID_SIZE_SETTINGS = [4, 6];

export interface SettingsProps {
  /** Boolean flag to show/hide the settings.  */
  open: boolean
  /** A callback to notify the parent function when users has submitted settings. */
  onSelectSettings?: (config: GameConfig) => void;
}

function Settings({
  open,
  onSelectSettings = () => {}
}: SettingsProps) {
  const [theme, setTheme] = useState('numbers');
  const [numPlayers, setNumPlayers] = useState(1);
  const [gridSize, setGridSize] = useState< 4 | 6 >(4);

  const onSelectTheme: MouseEventHandler<HTMLButtonElement> =
    (e) => setTheme(e.currentTarget.innerHTML.toLowerCase())

  const onSelectNumPlayers: MouseEventHandler<HTMLButtonElement> =
    (e) => setNumPlayers(parseInt(e.currentTarget.innerHTML))

  const onSelectGridSize: MouseEventHandler<HTMLButtonElement> =
    (e) => setGridSize(e.currentTarget.innerHTML.includes('4') ? 4 : 6)

  const handleSubmitSettings = () => {
    onSelectSettings({
      symbols: theme === 'icons',
      numberOfPlayers: numPlayers,
      gridSize: gridSize
    })
  }

  const classes = cx(styles.Settings, {
    [styles.open]: open
  });

  return (
    <div className={classes}>
      <div className={styles.row}>
        <Text level="p">Select Theme</Text>
        <div className={styles.options}>
          {THEME_SETTINGS.map((t) => (<Button key={t} active={theme === t} size="medium" onClick={onSelectTheme} >{t}</Button>))}
        </div>
      </div>
      <div className={styles.row}>
        <Text level="p">Number of Players</Text>
        <div className={styles.options}>
        {PLAYER_SETTINGS.map((p) => (<Button key={p} active={numPlayers === p} size="medium" onClick={onSelectNumPlayers}>{p}</Button>))}
        </div>
      </div>
      <div className={styles.row}>
        <Text level="p">Grid Size</Text>
        <div className={styles.options}>
        {GRID_SIZE_SETTINGS.map((s) => (<Button key={`${s}x${s}`} className={styles.padding} active={gridSize === s} size="medium" onClick={onSelectGridSize}>{`${s}x${s}`}</Button>))}
        </div>
      </div>
      <div className={styles.submit}>
        <Button
          onClick={handleSubmitSettings}
          theme="primary"
          size="medium"
        >
          start game
        </Button>
      </div>
    </div>
  )
}

Settings.displayName = 'Settings';

export default Settings;
