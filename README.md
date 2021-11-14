# Frontend Mentor - Memory game solution

The goal of this project is to demonstrate my experience in react for my portfolio. In order do this, I am building a memory game based off of this [Front-End Mentor
challenge](https://www.frontendmentor.io/challenges/memory-game-vse4WFPvM/hub/memory-game-v65cSOs-6).

**Note: Delete this note and update the table of contents based on what sections you keep.**

- [Goal](#goal)
- [The Challenge](#the-challenge)
- [Install](#install)
- [Run Scripts](#run-scripts)
- [Tests](#unit-tests)
- [Progress Tracker](./docs/progress/README.md)
- [Technical Design](./docs/technical-design/README.md)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Goal

The goal of this project is to demonstrate my experience in react for my portfolio. In order do this, I am building a memory game based off of this [Front-End Mentor
challenge](https://www.frontendmentor.io/challenges/memory-game-vse4WFPvM/hub/memory-game-v65cSOs-6). The memory game can be played by one or multiple players (up to four). The user should see a start screen on load, where they can set the theme, number of players, and grid size.

In multiplayer mode, once the game is started, each player will take turns making a move. A move is one attempt at matching two items on the grid. If a player successfully matches two grid tiles then a point is added to their score. Once all the tiles have been matched, an end game Modal should appear with the results of the match. The player with the highest score is the winner. If more than one player tie for the highest score then the game is tied.

For Solo players the game is timed as opposed to score. The objective of the solo player is to find all the matches in the shortest time possible with the least amount of moves. Once a player has found all the matches, an end game modal should appear displaying the result. The player should see the amount of moves and time it took to find all the matches.

### The Challenge

Users should be able to:
- View the optimal layout for the game depending on their device's screen size
- See hover states for all interactive elements on the page
- Play the Memory game either solo or multiplayer (up to 4 players)
- Set the theme to use numbers or icons within the tiles
- Choose to play on either a 6x6 or 4x4 grid

[More details on the challenge here](./docs/README.md)

<!-- ### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com) -->

## Install

Once you pull the repo down you can install dependencies with npm like:
```bash
npm install
```

or using yarn,

```bash
yarn install
```

## Run Scripts

Using yarn or npm you can run one of the run scripts.

| Script  | Description                                 |
| ------- | ------------------------------------------- |
| `dev`   | Starts the application in a dev environment |
| `build` | Creates a production build                  |
|

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

I'd like to acknowoledge FE mentor with deep gratitude for creating a platform where Front-End devs can practice their craft through well thought out project ideas. As well as supporting the work through providing assets to support development.

Also shout out to the brilliant designer who provided the Figma specs for this beautiful design.

