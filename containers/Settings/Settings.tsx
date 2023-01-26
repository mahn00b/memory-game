import { useState, MouseEventHandler } from 'react';
import cx from 'classnames';
import {
  Text,
  Button
} from '../../components';
import styles from './Settings.module.scss';

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
    (e) => setTheme(e.currentTarget.innerText.toLowerCase())

  const onSelectNumPlayers: MouseEventHandler<HTMLButtonElement> =
    (e) => setNumPlayers(parseInt(e.currentTarget.innerText))

  const onSelectGridSize: MouseEventHandler<HTMLButtonElement> =
    (e) => setGridSize(e.currentTarget.innerText.includes('4') ? 4 : 6)

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
          <Button size="medium" onClick={onSelectTheme}>Numbers</Button>
          <Button size="medium" onClick={onSelectTheme}>Icons</Button>
        </div>
      </div>
      <div className={styles.row}>
        <Text level="p">Number of Players</Text>
        <div className={styles.options}>
          <Button size="medium" onClick={onSelectNumPlayers}>1</Button>
          <Button size="medium" onClick={onSelectNumPlayers}>2</Button>
          <Button size="medium" onClick={onSelectNumPlayers}>3</Button>
          <Button size="medium" onClick={onSelectNumPlayers}>4</Button>
        </div>
      </div>
      <div className={styles.row}>
        <Text level="p">Grid Size</Text>
        <div className={styles.options}>
          <Button size="medium" onClick={onSelectGridSize}>4x4</Button>
          <Button size="medium" onClick={onSelectGridSize}>6x6</Button>
        </div>
      </div>
      <div className={styles.submit}>
        <Button
          onClick={handleSubmitSettings}
          theme="primary"
          size="medium"
        >
          Start Game
        </Button>
      </div>
    </div>
  )
}

export default Settings;
