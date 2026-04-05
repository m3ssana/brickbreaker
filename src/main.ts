import { Game } from './game/Game'

const game = new Game()
;(window as any).__game = game
game.start()
