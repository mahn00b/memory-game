import type { ComponentStory, ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Results from './Results';
import styles from './Results.module.scss';
import {
  SinglePlayerFinalGameState,
  MultiPlayerFinalGameState,
} from '../../test/fixtures';

export default {
  component: Results,
  title: 'Containers/Results',
  argTypes: {
    game: { table: { disable: true } },
    numberOfPlayers: {
      name: 'Number of Players',
      type: { name: 'number', required: true },
      defaultValue: 1,
      description: 'Determines the type of results to display',
      table: {
        type: {
          summary: 'Game type',
          detail: 'Select the game mode to view results for either Single player games or Multiplayer games.'
        },
        defaultValue: { summary: 4 },
      },
      options: [1, 4],
      mapping: {
        'Single Player': 1,
        'Multi Player': 4
      },
      control: {
        type: 'radio',
        options: [1, 4],
        labels: {
          1: 'Single Player',
          4: 'Multi Player'
        }
      }
    },
  },
} as ComponentMeta<typeof Results>

const Template: ComponentStory<typeof Results> = (props) => {
  const { numberOfPlayers } = props;

  if (numberOfPlayers === 1) {
    return (
      <div className={styles.StoryContainer} ><Results game={SinglePlayerFinalGameState} numberOfPlayers={1} /></div>
    );
  } else {
    return (
      <div className={styles.StoryContainer} ><Results game={MultiPlayerFinalGameState} numberOfPlayers={4} /></div>
    );
  }
}

export const Default = Template.bind({});
