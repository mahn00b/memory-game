import { Modal, PlayerCard, Button, Text } from '../../components'
import { formatTime } from '../../utils';
import styles from './Results.module.scss';

export interface ResultsProps {
  /** The settings chosen before the start of the game. */
  numberOfPlayers: GameConfig['numberOfPlayers'];
  /** The state at the end of the game. */
  game: GameState;
  /** Callback to be triggered when a player clicks restart. */
  onRestart?: () => void;
  /** Callback to be triggered when a player clicks 'set up new game.' */
  onSetupNewGame?: () => void;
}

function Results({
  numberOfPlayers,
  game: {
    players,
    timer,
    totalTurnsTaken,
    winners,
  },
  onRestart = () => {},
  onSetupNewGame = () => {},
}: ResultsProps) {

  const handleRestart = () => {
    onRestart();
  }

  const handleSetupNewGame = () => {
    onSetupNewGame();
  }

  return (
    <Modal isOpen>
      <div className={styles.Results}>
        {
          numberOfPlayers === 1
          ?
          <SinglePlayerResults totalTurnsTaken={totalTurnsTaken} timer={timer} />
          :
          <MultiPlayerResults players={players} winners={winners} />
        }
        <div className={styles.buttons}>
          <Button theme='primary' onClick={handleRestart}>
            Restart
          </Button>
          <Button theme='secondary' onClick={handleSetupNewGame}>
            Setup New Game
          </Button>
        </div>
      </div>
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
    <div>
      <div className={styles.message}>
        <Text level='h2'>
          You did it!
        </Text>
        <Text level="p">
          Game over! Here's how you got on:
        </Text>
      </div>
      <div className={styles.cardsWrapper}>
       <PlayerCard
          label='Time Elapsed'
          info={formatTime(timer as number)}
          ariaLabel='The total time you took to complete the game in seconds'
       />
       <PlayerCard
          label='Moves Taken'
          info={"" + totalTurnsTaken}
          ariaLabel='The number of turns you took to complete the game.'
       />
      </div>
    </div>
  )
}

interface MultiPlayerResultsProps {
  /** The total number of turns taken by the player */
  players: GameState['players'];
  /** The id of the player who won the game. */
  winners: GameState['winners'];
}

function MultiPlayerResults({
  players,
  winners = []
}: MultiPlayerResultsProps) {

  let message;

  if (winners.length === 1) {
    message = `Player ${(winners[0] as number) + 1} won!`
  } else if (winners.length > 1) {
    message = 'It\'s a tie!';
  }

  return (
    <div>
      <div className={styles.message}>
        <Text level='h2'>
          {message}
        </Text>
        <Text level="p">
          Game over! Here are the results...
        </Text>
      </div>
      <div className={styles.cardsWrapper}>
        {players.map(({ id, playerName, score }) => (
          <PlayerCard
            label={playerName ?? `Player ${id + 1}`}
            info={`${score} Pairs`}
            ariaLabel={`Player ${id + 1} scored ${score} pairs`}
            highlight={winners.includes(id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Results;
