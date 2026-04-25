import { Game } from './Game.js';

const game = new Game(document.getElementById('app'));
game.init();

window.__game = game;
