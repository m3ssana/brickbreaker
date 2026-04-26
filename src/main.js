import { Game } from './Game.js';
import { IntroVideo } from './IntroVideo.js';

const game = new Game(document.getElementById('app'));
IntroVideo.play();
game.init();

window.__game = game;
