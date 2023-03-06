import { Modal, PlayerCard, Button, Text } from '../../components'
import styles from './Results.module.scss';

export interface ResultsProps {
  /** The settings chosen before the start of the game. */
  numberOfPlayers: GameConfig['numberOfPlayers'];
  /** The state at the end of the game. */
  game: GameState
}

function Results({
  numberOfPlayers,
  game: {
    players,
    timer,
    totalTurnsTaken
  }
}: ResultsProps) {

  if (numberOfPlayers === 1) {
    return (
      <div className={styles.Results}>
        <SinglePlayerResults totalTurnsTaken={totalTurnsTaken} timer={timer} />
      </div>
    )
  }

  return (
    <Modal isOpen={true}>
      {
        numberOfPlayers === 1
        ?
        <SinglePlayerResults totalTurnsTaken={totalTurnsTaken} timer={timer} />
        :
        <MultiPlayerResults players={players} />
      }
    </Modal>
  )
}

interface SinglePlayerResultsProps {
  /** The total number of turns taken by the player */
  totalTurnsTaken: GameState['totalTurnsTaken'];
  /** The total time taken to complete the game in seconds */
  timer: GameState['timer'];
}

function SinglePlayerResults({
  totalTurnsTaken,
  timer
}: SinglePlayerResultsProps) {
  return (
    <div className={styles.singlePlayer}>
      Single Player
    </div>
  )
}

interface MultiPlayerResultsProps {
  /** The total number of turns taken by the player */
  players: GameState['players'];
}

function MultiPlayerResults({
  players,
}: MultiPlayerResultsProps) {
  return (
    <div className={styles.singlePlayer}>
      Multi player
    </div>
  )
}

export default Results;
