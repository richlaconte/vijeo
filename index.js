const Game = require('./Game');

const createGame = () => {
    let game = new Game();
    return game;
}

module.exports = createGame();