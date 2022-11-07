import GameBoard from "./GameBoard";

export default {
  title: 'Containers/GameBoard',
  component: GameBoard,
  argTypes: {
    gridSize: {
      name: 'Grid Size',
      type: { name: 'number', required: true },
      defaultValue: 4,
      description: 'overwritten description',
      table: {
        type: {
          summary: 'Grid size',
          detail: 'Set the size of the grid to be 4x4 or 6x6'
        },
        defaultValue: { summary: 4 },
      },
      control: {
        type: 'radio',
        options: [4, 6]
      }
    },
    onAllMatched: {
      action: 'allMatched'
    },
    onClickTile: {
      action: 'tile clicked'
    }
  }
};

const Template = (args: any) => {
  function allMatched(resetBoard: Function) {
    resetBoard();
  }


  return <GameBoard config={{ gridSize: args.gridSize, numberOfPlayers: 1 }} {...args} onAllMatched={allMatched} />
};

export const Default = Template.bind({});
