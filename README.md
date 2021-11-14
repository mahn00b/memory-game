# Frontend Mentor - Memory game solution

The goal of this project is to demonstrate my experience in react for my portfolio. In order do this, I am building a memory game based off of this [Front-End Mentor challenge](https://www.frontendmentor.io/challenges/memory-game-vse4WFPvM/hub/memory-game-v65cSOs-6).

- [Goal](#goal)
- [The Challenge](#the-challenge)
  - [User Stories](#user-stories)
  - [More Details](./docs/challenge/README.md)
- [Install](#install)
- [Run Scripts](#run-scripts)
- [Tests](#unit-tests)
- [Progress Tracker](./docs/progress/README.md)
- [Technical Design](./docs/technical-design/README.md)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Goal

The goal of this project is to demonstrate my experience in react for my portfolio. In order do this, I am building a memory game based off of this [Front-End Mentor challenge](https://www.frontendmentor.io/challenges/memory-game-vse4WFPvM/hub/memory-game-v65cSOs-6). The memory game can be played by one or multiple players (up to four). The user should see a start screen on load, where they can set the theme, number of players, and grid size.

In multiplayer mode, once the game is started, each player will take turns making a move. A move is one attempt at matching two items on the grid. If a player successfully matches two grid tiles then a point is added to their score. Once all the tiles have been matched, an end game Modal should appear with the results of the match. The player with the highest score is the winner. If more than one player tie for the highest score then the game is tied.

For Solo players the game adds a time component. As opposed to being scored based on matches, the score is based on time to completion and number of moves. The objective of the solo player is to find all the matches in the shortest time possible with the least amount of moves. Once a player has found all the matches, an end game modal should appear displaying the result. The player should see the amount of moves and time it took to find all the matches.

### The Challenge

#### User Sories
- As a user, I should be able to play the game on my computer, my phone, or my tablet.
- As a user, I should see hover states for all interactive elements on the page
- As a user, I can play the Memory game either solo or multiplayer (with up to 3 other players).
- As a user, I can set the theme to use numbers or icons within the tiles
- As a user, I can choose to play on either a 6x6 or 4x4 grid

[More details on the challenge here.](./docs/challenge/README.md)

<!-- ### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com) -->

## Install

Once you pull the repo down you can install dependencies with npm:
```bash
npm install
```

or using yarn,

```bash
yarn install
```

## Run Scripts

Using yarn or npm you can run one of the run scripts.

| Script            | Description                                      |
| ----------------- | ------------------------------------------------ |
| `dev`             | Starts the application in a dev environment      |
| `build`           | Creates a production build                       |
| `start`           | Starts the production build                      |
| `lint`            | Runs eslint on source files.                     |
| `test`            | Run jest unit tests.                             |
| `test:coverage`   | Run jest unit tests and crete a coverage report. |
| `test:dev`        | Run jest unit tests with a file watcher.         |
| `storybook`       | Run storybook in dev mode.                       |
| `storybook:build` | Build storybook components into static html.     |

## Unit tests

We use jest for unit testing. You can run them

```bash
yarn test
```

If you want run it with a file watcher:

```bash
yarn test:dev
```

## Author

- Website - [Mahmoud Yousif](https://www.mahmoudyousif.com)
- Frontend Mentor - [@mahn00b](https://www.frontendmentor.io/profile/mahn00b)
- LinkedIn - [LinkedIn](www.linkedin.com/in/mayousif)
- Twitter - [@SyntaksErr0r](https://www.twitter.com/SyntaksErr0r)


### [TODO] Screenshots
No screen shots as of yet


## Acknowledgments

I'd like to acknowledge FE mentor with deep gratitude for creating a platform where Front-End devs can practice their craft through well thought out project ideas. As well as supporting the work through providing assets to support development.

Also shout out to the brilliant designer who provided the Figma specs for this beautiful design.

