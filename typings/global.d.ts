interface GameConfig {
  numberOfPlayers: number;
  gridSize: 4 | 6;
  symbols?: boolean;
}

interface Player {
  id: number;
  playerName?: string;
  score: number;
}

interface GameState {
  players: Player[]
  timer?: number
  turn?: 0 | 1 | 2 | 3;
}

