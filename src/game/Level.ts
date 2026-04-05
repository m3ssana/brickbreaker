/** Thin data wrapper — Game.ts owns brick loading and speed application. */
import type { LevelDef } from './LevelData'

export class Level {
  readonly def: LevelDef
  constructor(def: LevelDef) { this.def = def }
}
