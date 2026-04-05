export interface LevelDef {
  id: number
  name: string
  world: string
  /** Row chars: '.' empty, 'S' standard, 'A' armored (3HP), 'E' explosive, 'T' troll, 'M' mirror, 'G' ghost */
  grid: string[]
  ballSpeedMultiplier: number
}

// ── World 1: Neon City (levels 1–10) ──────────────────────────────────────────

const NEON_CITY: LevelDef[] = [
  {
    id: 1, name: 'Hello World', world: 'Neon City', ballSpeedMultiplier: 1.00,
    grid: [
      'SSSSSSSSSS',
      'SSSSSSSSSS',
      'SSSSSSSSSS',
      'SSSSSSSSSS',
    ],
  },
  {
    id: 2, name: 'Checkerboard', world: 'Neon City', ballSpeedMultiplier: 1.05,
    grid: [
      'S.S.S.S.S.',
      '.S.S.S.S.S',
      'S.S.S.S.S.',
      '.S.S.S.S.S',
      'S.S.S.S.S.',
    ],
  },
  {
    id: 3, name: 'The Wall', world: 'Neon City', ballSpeedMultiplier: 1.10,
    grid: [
      'SSSSSSSSSS',
      'S........S',
      'S........S',
      'S........S',
      'SSSSSSSSSS',
    ],
  },
  {
    id: 4, name: 'Pyramid', world: 'Neon City', ballSpeedMultiplier: 1.15,
    grid: [
      '....SS....',
      '...SSSS...',
      '..SSSSSS..',
      '.SSSSSSSS.',
      'SSSSSSSSSS',
    ],
  },
  {
    id: 5, name: 'Neon Boss', world: 'Neon City', ballSpeedMultiplier: 1.20,
    grid: [
      'AAASASAAA.',
      'S........S',
      'S..SSS...S',
      'S.S....S.S',
      'S.S....S.S',
      'S..SSS...S',
      'S........S',
      'AAASASAAA.',
    ],
  },
  {
    id: 6, name: 'Cross Fire', world: 'Neon City', ballSpeedMultiplier: 1.25,
    grid: [
      '....SS....',
      'SSSSSSSSSS',
      '....SS....',
      'SSSSSSSSSS',
      '....SS....',
      'SSSSSSSSSS',
      '....SS....',
    ],
  },
  {
    id: 7, name: 'Diamond', world: 'Neon City', ballSpeedMultiplier: 1.28,
    grid: [
      '....AS....',
      '...SSSS...',
      '..SSASSS..',
      '.SSSSSSSS.',
      'SSSSAASSSS',
      '.SSSSSSSS.',
      '..SSASSS..',
      '...SSSS...',
      '....AS....',
    ],
  },
  {
    id: 8, name: 'Double Cross', world: 'Neon City', ballSpeedMultiplier: 1.32,
    grid: [
      'SSSS..SSSS',
      'SSSS..SSSS',
      '..........',
      '..........',
      'SSSSSSSSSS',
      '..........',
      '..........',
      'SSSS..SSSS',
      'SSSS..SSSS',
    ],
  },
  {
    id: 9, name: 'Fortress', world: 'Neon City', ballSpeedMultiplier: 1.38,
    grid: [
      'AAAAAAAAAA',
      'A........A',
      'A.SSSSSS.A',
      'A.S....S.A',
      'A.S....S.A',
      'A.SSSSSS.A',
      'A........A',
      'AAAAAAAAAA',
    ],
  },
  {
    id: 10, name: 'City Siege', world: 'Neon City', ballSpeedMultiplier: 1.45,
    grid: [
      'AAASSAAASS',
      'SSSSSSSSSS',
      'AASSSSSAA.',
      'SSSSSSSSSS',
      'ASSSSSSSAS',
      'SSSSSSSSSS',
      'AAASSAAASS',
      'SSSSSSSSSS',
    ],
  },
]

// ── World 2: The Void (levels 11–20) ──────────────────────────────────────────

const THE_VOID: LevelDef[] = [
  {
    id: 11, name: 'Into the Void', world: 'The Void', ballSpeedMultiplier: 1.48,
    grid: [
      'SAAGSSAAGS',
      'SSSSS.....',
      'GSSS......',
      'SSS......G',
      'SAAGSSAAGS',
    ],
  },
  {
    id: 12, name: 'Ghost Town', world: 'The Void', ballSpeedMultiplier: 1.52,
    grid: [
      'G.G.G.G.G.',
      '.G.G.G.G.G',
      'G.G.G.G.G.',
      '.G.G.G.G.G',
      'SSSSSSSSSS',
    ],
  },
  {
    id: 13, name: 'Mirror Mirror', world: 'The Void', ballSpeedMultiplier: 1.56,
    grid: [
      '....MA....',
      '...MSSM...',
      '..SSMSSS..',
      '.SAAAAAMS.',
      'SSSSSSSSSS',
      '.SAMAAMAS.',
      '..SSSSSS..',
      '...MSSM...',
      '....MA....',
    ],
  },
  {
    id: 14, name: 'Phantom Grid', world: 'The Void', ballSpeedMultiplier: 1.60,
    grid: [
      'SGSGSGSGS.',
      'GSGSGSGSG.',
      'SGSGSGSGS.',
      'GSGSGSGSG.',
      '...AAAA...',
    ],
  },
  {
    id: 15, name: 'Void Boss', world: 'The Void', ballSpeedMultiplier: 1.65,
    grid: [
      'AAGAAAGAA.',
      'G........G',
      'A..GAG...A',
      'G.G....G.G',
      'G.G....G.G',
      'A..GAG...A',
      'G........G',
      'AAGAAAGAA.',
    ],
  },
  {
    id: 16, name: 'Spectral Ring', world: 'The Void', ballSpeedMultiplier: 1.68,
    grid: [
      '..GGGGGG..',
      '.G......G.',
      'G........G',
      'G..SSSS..G',
      'G..SSSS..G',
      'G........G',
      '.G......G.',
      '..GGGGGG..',
    ],
  },
  {
    id: 17, name: 'Mirror Maze', world: 'The Void', ballSpeedMultiplier: 1.72,
    grid: [
      'MSMSMSMSSM',
      'SMSMSMSM.S',
      'MSMSMSMSMS',
      'SMSMSMSMSS',
      'MSMSMSMSMS',
    ],
  },
  {
    id: 18, name: 'Ghost Train', world: 'The Void', ballSpeedMultiplier: 1.75,
    grid: [
      'SSSSSSSSSS',
      'G........G',
      'GGGGGGGGGG',
      'G........G',
      'SSSSSSSSSS',
      'G........G',
      'GGGGGGGGGG',
    ],
  },
  {
    id: 19, name: 'Veil of Chaos', world: 'The Void', ballSpeedMultiplier: 1.78,
    grid: [
      'AAGAMGAAAG',
      'GSMGSSMGSS',
      'MGSSSMGSSM',
      'SSGMGAGSSG',
      'AGGAAAGAGG',
    ],
  },
  {
    id: 20, name: 'Void Collapse', world: 'The Void', ballSpeedMultiplier: 1.80,
    grid: [
      'AAGMAAGMAA',
      'GGSSGGSSGG',
      'MAGSSMAGSS',
      'SSGGSSGGSS',
      'AAGMAAGMAA',
      'GGSSGGSSGG',
      'MAGSSMAGSS',
    ],
  },
]

// ── World 3: Inferno (levels 21–30) ───────────────────────────────────────────

const INFERNO: LevelDef[] = [
  {
    id: 21, name: 'Raging Inferno', world: 'Inferno', ballSpeedMultiplier: 1.85,
    grid: [
      'SSESSESSSE',
      'SSSSSSSSSS',
      'ESSSSSSSSE',
      'SSSSSSSSSS',
      'SSESSESSSE',
      'SSSSSSSSSS',
      'SSSSSSSSSS',
    ],
  },
  {
    id: 22, name: 'Chain Reaction', world: 'Inferno', ballSpeedMultiplier: 1.90,
    grid: [
      'EEEEEEEEEE',
      'SSSSSSSSSS',
      'EEEEEEEEEE',
      'SSSSSSSSSS',
      'EEEEEEEEEE',
    ],
  },
  {
    id: 23, name: 'Troll Toll', world: 'Inferno', ballSpeedMultiplier: 1.93,
    grid: [
      'STSSSSTSSS',
      'SSSSSSSSSS',
      'TSSSSSSSST',
      'SSSSSSSSSS',
      'STSSSSTSSS',
    ],
  },
  {
    id: 24, name: 'Bomb Squad', world: 'Inferno', ballSpeedMultiplier: 1.97,
    grid: [
      '..EEEEEE..',
      '.ESSSSSE..',
      'ESSSSSSE.E',
      'ESSSSSSEE.',
      '..EEEEEE..',
    ],
  },
  {
    id: 25, name: 'Inferno Boss', world: 'Inferno', ballSpeedMultiplier: 2.00,
    grid: [
      'AASETSAEAS',
      'T........T',
      'E..AEA...E',
      'S.E....E.S',
      'S.E....E.S',
      'E..AEA...E',
      'T........T',
      'AASETSAEAS',
    ],
  },
  {
    id: 26, name: 'Hellfire Cross', world: 'Inferno', ballSpeedMultiplier: 2.03,
    grid: [
      '....EE....',
      'EEEEEEEEEE',
      '....EE....',
      'SSSSSSSSSS',
      '....SS....',
      'EEEEEEEEEE',
      '....EE....',
    ],
  },
  {
    id: 27, name: 'Troll Kingdom', world: 'Inferno', ballSpeedMultiplier: 2.07,
    grid: [
      'STSTSTSTST',
      'TSTSSTSTTS',
      'STSTSTSTST',
      'TSTSSTSTTS',
      'EEEEEEEEEE',
    ],
  },
  {
    id: 28, name: 'Blast Radius', world: 'Inferno', ballSpeedMultiplier: 2.12,
    grid: [
      'AEAEAEAEAE',
      'EAEAEAEAEA',
      'AEAEAEAEAE',
      'EAEAEAEAEA',
      'AEAEAEAEAE',
    ],
  },
  {
    id: 29, name: 'Phoenix Rising', world: 'Inferno', ballSpeedMultiplier: 2.16,
    grid: [
      '....AA....',
      '...EEEE...',
      '..EEAAEE..',
      '.EESSSSEE.',
      'AASSSSSSAA',
      '.EESSSSEE.',
      '..EEAAEE..',
      '...EEEE...',
    ],
  },
  {
    id: 30, name: 'Scorched Earth', world: 'Inferno', ballSpeedMultiplier: 2.20,
    grid: [
      'AAEAAEAAEE',
      'EAAEAEAEAA',
      'AETAEATAAE',
      'EAAEAEAEAA',
      'AAEAAEAAEE',
      'EAAEAEAEAA',
    ],
  },
]

// ── World 4: Crystal Maze (levels 31–40) ──────────────────────────────────────

const CRYSTAL_MAZE: LevelDef[] = [
  {
    id: 31, name: 'Crystal Lattice', world: 'Crystal Maze', ballSpeedMultiplier: 2.25,
    grid: [
      'MAMAMAMAMA',
      'AMAMAMAMAM',
      'MAMAMAMAMA',
      'AMAMAMAMAM',
      'MAMAMAMAMA',
    ],
  },
  {
    id: 32, name: 'Prism Break', world: 'Crystal Maze', ballSpeedMultiplier: 2.30,
    grid: [
      'AAAAMAAAAM',
      'AAMAAAAAMA',
      'AMAAAAAAM.',
      'MAAAAAAAAM',
      'AAAAMAAAAM',
    ],
  },
  {
    id: 33, name: 'Hall of Mirrors', world: 'Crystal Maze', ballSpeedMultiplier: 2.35,
    grid: [
      'MMMMMMMMMM',
      'MSSSSSSSMS',
      'MSAAAAAAMS',
      'MSASSSASMS',
      'MSASSSASMS',
      'MSAAAAAAMS',
      'MSSSSSSSMS',
      'MMMMMMMMMM',
    ],
  },
  {
    id: 34, name: 'Refraction', world: 'Crystal Maze', ballSpeedMultiplier: 2.40,
    grid: [
      'AMAMAMAM..',
      '..AMAMAMAM',
      'AMAMAMAM..',
      '..AMAMAMAM',
      'AMAMAMAM..',
    ],
  },
  {
    id: 35, name: 'Crystal Boss', world: 'Crystal Maze', ballSpeedMultiplier: 2.45,
    grid: [
      'AAMAAMAAMA',
      'M........M',
      'A..MAM...A',
      'M.A....A.M',
      'M.A....A.M',
      'A..MAM...A',
      'M........M',
      'AAMAAMAAMA',
    ],
  },
  {
    id: 36, name: 'Kaleidoscope', world: 'Crystal Maze', ballSpeedMultiplier: 2.48,
    grid: [
      'MAAAMAMAAM',
      'AMAAMAMAMA',
      'AMAAAMAMAA',
      'MAAAMAMAAM',
      'AMAAMAMAMA',
      'AMAAAMAMAA',
    ],
  },
  {
    id: 37, name: 'Shard Storm', world: 'Crystal Maze', ballSpeedMultiplier: 2.52,
    grid: [
      'AAMAMAAMMA',
      'MAAMEAMEAM',
      'AMAMEAMAME',
      'MAAMEAMEAM',
      'AAMAMAAMMA',
    ],
  },
  {
    id: 38, name: 'Faceted Core', world: 'Crystal Maze', ballSpeedMultiplier: 2.58,
    grid: [
      '...MAAM...',
      '..MAAAMM..',
      '.MAAAAAAM.',
      'MAAAAAAAMM',
      'MAAAAAAAMM',
      '.MAAAAAAM.',
      '..MAAAMM..',
      '...MAAM...',
    ],
  },
  {
    id: 39, name: 'Glass Cannon', world: 'Crystal Maze', ballSpeedMultiplier: 2.62,
    grid: [
      'AAAAAAAAAA',
      'MMMMMMMMMM',
      'AAAAAAAAAA',
      'MMMMMMMMMM',
      'AAAAAAAAAA',
      'MMMMMMMMMM',
    ],
  },
  {
    id: 40, name: 'Crystal Prison', world: 'Crystal Maze', ballSpeedMultiplier: 2.70,
    grid: [
      'AAAAAAAAAM',
      'ASSSSSSAAM',
      'ASAMAAAMAM',
      'ASAMAAAMAM',
      'AMSAAAASAA',
      'AMSAAAASAA',
      'MAASSSSAMM',
      'MAAAAAAAAA',
    ],
  },
]

// ── World 5: The Roast Pit (levels 41–50) ─────────────────────────────────────

const ROAST_PIT: LevelDef[] = [
  {
    id: 41, name: 'The Pit Opens', world: 'The Roast Pit', ballSpeedMultiplier: 2.75,
    grid: [
      'AAASTSAAA.',
      'S........S',
      'S..ESTE..S',
      'S.S....S.S',
      'S.S....S.S',
      'S..ESTE..S',
      'S........S',
      'AAASTSAAA.',
    ],
  },
  {
    id: 42, name: 'Maximum Roast', world: 'The Roast Pit', ballSpeedMultiplier: 2.82,
    grid: [
      'AETMAETMAE',
      'ETMAETMAET',
      'TMAETMAETM',
      'MAETMAETMA',
      'AETMAETMAE',
    ],
  },
  {
    id: 43, name: 'Pain Train', world: 'The Roast Pit', ballSpeedMultiplier: 2.88,
    grid: [
      'AAEEAAEEAA',
      'EETTEEТТEE',
      'AAEEAAEEAA',
      'EETTEEТТEE',
      'AAEEAAEEAA',
      'EETTEEТТEE',
    ].map(row => [...row].map(c => (c.charCodeAt(0) > 127 ? 'T' : c)).join('')),
  },
  {
    id: 44, name: 'Ghost Inferno', world: 'The Roast Pit', ballSpeedMultiplier: 2.94,
    grid: [
      'GEGEGEGEGE',
      'EEEEEEEEEE',
      'GEGEGEGEGE',
      'AAAAAAAAAA',
      'GEGEGEGEGE',
      'EEEEEEEEEE',
    ],
  },
  {
    id: 45, name: 'Pit Boss I', world: 'The Roast Pit', ballSpeedMultiplier: 3.00,
    grid: [
      'AAETSAETSA',
      'T........T',
      'E..AEA...E',
      'S.E....E.S',
      'A.M....M.A',
      'E..AEA...E',
      'T........T',
      'AAETSAETSA',
    ],
  },
  {
    id: 46, name: 'Mirror Inferno', world: 'The Roast Pit', ballSpeedMultiplier: 3.08,
    grid: [
      'MEMEMEMEME',
      'EAEAEAEAEA',
      'MEMEMEMEME',
      'EAEAEAEAEA',
      'MEMEMEMEME',
    ],
  },
  {
    id: 47, name: 'All Hell', world: 'The Roast Pit', ballSpeedMultiplier: 3.16,
    grid: [
      'AGEMTGEMTA',
      'GEMTAGEMTA',
      'EMTAGEМTAG',
      'MTAGEMTAGE',
      'AGEMTGEMTA',
    ].map(row => [...row].map(c => (c.charCodeAt(0) > 127 ? 'M' : c)).join('')),
  },
  {
    id: 48, name: 'The Gauntlet', world: 'The Roast Pit', ballSpeedMultiplier: 3.25,
    grid: [
      'AAAAAAAAAA',
      'EEEEEEEEEE',
      'AAAAAAAAAA',
      'MMMMMMMMMM',
      'AAAAAAAAAA',
      'EEEEEEEEEE',
      'AAAAAAAAAA',
    ],
  },
  {
    id: 49, name: 'Endgame', world: 'The Roast Pit', ballSpeedMultiplier: 3.38,
    grid: [
      'AAEMTEMAAE',
      'EMTAAATEMG',
      'MAETGEMTAE',
      'TGAMTGAME.',
      'AAEMTEMAAE',
      'EMTAAATEMG',
      'MAETGEMTAE',
    ],
  },
  {
    id: 50, name: 'The Final Roast', world: 'The Roast Pit', ballSpeedMultiplier: 3.50,
    grid: [
      'AAEMTAEMTA',
      'ETMAETMAET',
      'MTAEMTAEMT',
      'AETMAETMAE',
      'AAEMTAEMTA',
      'ETMAETMAET',
      'MTAEMTAEMT',
      'AETMAETMAE',
    ],
  },
]

export const LEVELS: LevelDef[] = [
  ...NEON_CITY,
  ...THE_VOID,
  ...INFERNO,
  ...CRYSTAL_MAZE,
  ...ROAST_PIT,
]
