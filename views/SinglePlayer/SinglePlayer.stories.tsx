import { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import SinglePlayer from './SinglePlayer';
import GameContext from '../../context/game/GameContext';

export default {
  component: SinglePlayer,
  title: 'Views/Single Player UX',
  argTypes: {}
} as ComponentMeta<typeof SinglePlayer>

const Template: ComponentStory<typeof SinglePlayer> = () => {
  const [settings, setSettings] = useState<GameConfig | undefined>({
    numberOfPlayers: 1,
    symbols: false,
    gridSize: 4
  });

  return (
    <GameContext.Provider value={{ settings, setSettings }}>
      <SinglePlayer />
    </GameContext.Provider>
  )
}

export const Default = Template.bind({});
