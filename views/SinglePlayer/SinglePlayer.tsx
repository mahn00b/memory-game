import { useState, useContext } from 'react';
import  { Button, Text, PlayerCard } from '../../components';
import { GameBoard, Timer, Menu } from '../../containers';
import GameContext from '../../context/game/GameContext';
import styles from './SinglePlayer.module.scss';

function SinglePlayer() {
  const { settings } = useContext(GameContext);
  const [time, setTime] = useState(0);
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const onRestartGame = () => {};
  const onRequestNewSetup = () => {};
  const onClickTile = () => {};
  const onAllMatched = () => {};
  const onTick = (t: number) => { setTime(t) }
  const onPauseGame = () => { setIsPaused(true) }
  const onResumeGame = () => { setIsPaused(false) }
  const onMenuToggle = (isOpen: boolean) => {
    if (isOpen)
      onPauseGame()
    else
      onResumeGame()
  }

  return(
    <div className={styles.SinglePlayer}>
      <header className={styles.header}>
        <Text level="h1">memory</Text>
        <div className={styles.menuWrapper}>
          <span className={styles.mobile}>
            <Menu onRequestNewSetup={onRequestNewSetup} onRestartGame={onRestartGame} onToggleMenu={onMenuToggle} />
          </span>
          <span className={styles.large}>
            <Button className={styles.button} size="medium" theme="primary" onClick={onRestartGame}>
              restart
            </Button>
            <Button className={styles.button} size="medium" theme="secondary" onClick={onRequestNewSetup}>
              new game
            </Button>
          </span>
        </div>
      </header>
      <main>
        <div className={styles.board}>
          {settings && <GameBoard config={settings} onClickTile={onClickTile} onAllMatched={onAllMatched} />}
        </div>
        <div className={styles.scoreDisplay}>
          <div className={styles.timer}>
            <Timer onTick={onTick} pause={isPaused} />
          </div>
          <div>
            <PlayerCard label="score" info={score.toString()} ariaLabel="Your current score" />
          </div>
        </div>
      </main>
    </div>
  )
}

SinglePlayer.displayName = 'SinglePlayer';

export default SinglePlayer;
