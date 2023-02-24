import { useState } from 'react';
import GameContext from '../context/game';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const [settings, setSettings] = useState<GameConfig>()

  return (
    <GameContext.Provider value={{ settings, setSettings }}>
      <Component {...pageProps} />
    </GameContext.Provider>
  );
}
