interface GameConfig {
  /** The number of people participating in the game. */
  numberOfPlayers: number;
  /** Sets the dimensions of the board. */
  gridSize: 4 | 6;
  /** Flags the use of icons instead of plain numbers. */
  symbols?: boolean;
}

interface Player {
  /** Zero-based index player number (0-3). */
  id: 0 | 1 | 2 | 3;
  /** Player name if add by the user. */
  playerName?: string;
  /** The player's score. */
  score: number;
  /** Number of turns this player has taken. */
  numTurns: number;
}

interface GameState {
  /** The state of each player in the game */
  players: Player[]
  /** The elapsed seconds. */
  timer?: number
  /** The id of the player who's turn it is. */
  turn: Player['id'];
  /** The total number of turns played during this game. */
  totalTurnsTaken: number
  /** The winner of the game. */
  winners?: Player['id'][];
}
