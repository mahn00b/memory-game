# Technical Design

## Table of contents

- [Solution](#solution)
  - [Overview](#overview)
  - [Technologies](#what-i-learned)
  - [Components](#components)                                                                 ](#continued-development)
  - [Workflows](#useful-resources)
    - [Game Start](#game-start)
    - [Board Initialization](#board-initialization)
    - [Multiplayer Game](#multiplayer-game)
    - [SinglePlayer Game](#signleplayer-game)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Solution

### Overview
For the UI, I'm selecting React. Since React is my strongest skill, I'm going to use it as the building blocks for this game. Rather than opting for the vanilla Javascript version I will use Typescript.

For state management, I plan to use mobx-react-lite. To minimize re-renders I'm implementing mobx's observer pattern so as not rely on React's Context API.

For styling, I'm going to use CSS modules for the benefit of component-scoped styles and to maintain several smaller stylesheets. I usually like to use atomic classes in react like tailwind or tachyons, but I opted not to because of the component interactions potentially creating really verbose className strings.

For a faster build out I'm going to leverage Storybook.js for isolated component development.

### Technologies

| Technology      | usage                          |
| --------------- | ------------------------------ |
| React           | UI development                 |
| Typescript      | static typing                  |
| CSS Modules     | Scoped styles                  |
| SASS            | CSS pre-processing             |
| mobx-react-lite | state management               |
| Storybook       | Isolated component development |

### Components

- Button
  There are two kinds of buttons. The orange and the dark blue one. Both buttons have different color schemes; each color representing a state for the button.

  A.C. :
  - Should build using an HTML Button
  - Build reactive states:
    - Hover
    - Active

- GridTile
  The GridTile will be the component that the user interacts with in the grid. It should display a specific value, and become interactive when the user clicks on it.

  A.C. :
  - should accept an onClick handler
  - should accept a value to display
  - should accept a prop to manage it's selected state
  - should accept a prop to manage it's inactive state
  - should use a native html button component for better accessibility
  - should be accessible, adding props where necessary to fulfill that criteria.


- PlayerCard
  The PlayerCard will contain information relevant to players. It should accept a label and a value. The card should also allow for an active state to indicate when it's a players turn during the multiplayer experience.

  A.C. :
  - should accept a label and a value
  - should be accessible, adding props where necessary to fulfill that criteria.
  - should have a prop to toggle it's active state.

- Modal
  The modal will be used to display the game results at the end of the match.

### Workflow

#### Game Start
1. Page is requested, start screen is rendered to the user
2. User clicks a CTA to start the game. We should capture game settings.
3. Based on the user's selection, we will instantiate an array of 16 or 36 items.

#### Board Initialization
1. For each kind of tile (Determined by the user selection), we will generate a random number. One at a time.
2. Using modular arithmetic we'll compute an index from each random number.
```js
const randomIndex = randomNumber() % x // Where x is the size of the array
```

    If the index is defined in the array
      a. Generate a new random number
      b. repeat step 2
    If there is no element defined for the Arrays index
      a. Set this element to be the current tile
3. Repeat steps 1-2 until all elements in the array have been selected.

#### Multiplayer Game

1. Start off making the current player active
2. Current Player clicks two grid items
    if the player successfully matches two items:
      a. Record a point for that player
      b. Make selected GridTiles inactive.
    if the player doesn't find a match:
      c. Hide values
3. Rotate to the next player
4. Repeat Steps 1-3 until all tiles are found.
5. Once all the tiles are found the game ends
6. Make the summary modal appear with the results of the match.
    if the user chooses to restart the match.
      a. Restart game from Board Initialization
    if the user chooses to set up a new game
      a. Restart game from Game Start

#### Single player Game

1. Start a timer once the game begins
2. Player clicks two grid items
    if the player successfully matches two items:
      a. Record a point for that player
      b. Make selected GridTiles inactive.
    if the player doesn't find a match:
      a. Hide values
3. When the user clicks all the tiles, the game ends and the timer should stop.
4. Make the summary modal appear with the results of the match.
    if the user chooses to restart the match.
      a. Restart game from Board Initialization
    if the user chooses to set up a new game
      a. Restart game from the start screen