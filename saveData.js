/*

PLAYER DATA CHANGE LOG

*/

const blankPlayer = {
  version: 15,
  activePortal: 'academyEffector',
  colorProfile: {
    academyProjects: ['#444444', '#CCCC44', '#44CC44', '#4444CC'],
  },
  general: {
    level: 0, // Player level
    loopsFilled: 0,
    engineeringBadge: false,
    ouroEnabled: false,
    knoxEnabled: false,
  },
  fleet: {
    zeus: {
      evo: 0,
      rank: { current: 0, progress: 0, goal: 1 },
      freePoints: 0,
      crew: 0,
      vehicles: 0, // Material Scavenger Vehicles [Mission Materials] *= (0.25 * [level] * [Zeus Crew] + 1)
      scrappers: 0, // Academy Auto-Scrappers [MP Gained, Mission Materials] *= (0.1 * [level] * [Zeus Crew] + 1)
    },
    ouro: {
      crew: 0,
      bioMaterial: 0, // Bio-Material Duplication Tech [Mission Materials] *= (0.005 * [level] * [Zeus Crew] + 1)
    },
  },
  loopMods: {
    zeusRankBenefits: 0, // Mission Materials *= pow(0.01 * [Zeus Rank Benefits] + 1, [Zeus Rank])
    materialHauling: 0, // Mission Materials *= pow(1.05, [Material Hauling])
    beyonders: 0, // [AP Gained, Mission Materials] *= pow(1.01, [Beyonders])
    swarm: 0, // Mission Materials *= pow(1.25, [Swarm]), Mission Time /= pow(1.03, [Swarm])
    expansion: 0, // Mission Materials *= pow(1.01, [Expansion])
    looping: 0, // Mission Materials *= pow(0.0002 * [Looping] + 1, [Loops Filled])
    productivity: 0, // Mission Speed *= pow(1.1, [Productivity]), Mission Materials *= pow(0.002 * [Productivity] + 1, [Player Level])
    sekhur5: 0, // Mission Materials *= 1.25
    sowSireneMats: 0, // Mission Matersials *= pow(1.1, [Knox Highscore Stage])
  },
  shardMilestones: {
    wonderous: 0,
    earthly: 0,
  },
  research: {
    r43: 0, // [AP = (level > 2 ? 1.3 : 1) * (level > 4 ? 1.3 : 1), Materials = pow(1.5, floor(level / 2))]
    r55: 0, // [AP = (level > 2 ? 1.5 : 1) * (level > 4 ? 1.5 : 1), Materials = pow(1.75, floor(level / 2))]
    r58: 0, // [Mission Speed = pow(1.05, floor((level + 1) / 2)) || BUGGED = pow(1.05, floor((level + 1) / 2)) / (0.05 * (level === 6) + 1)]
    r60: 0, // [AP = level > 3 ? 10 : 1, Materials = 4 * (level > 1) + 1]
    r62: 0, // Project Cost = (level > 1 ? 1.5 : 1) * (level > 3 ? 2 : 1) * (level > 5 ? 2.5 : 1)]
    r67: 0, // [AP = (level > 2 ? 2 : 1) * (level > 4 ? 3 : 1), Materials = (level > 1 ? 2 : 1) * (level > 3 ? 3 : 1) * (level > 5 ? 4 : 1)]
    r70: 0, // [AP = level > 3 ? 50 : 1, Materials = 4 * (level > 1) + 1, Mission Speed = (level > 4) + 1]
    r72: 0, // Project Cost = (level > 1 ? 2 : 1) * (level > 3 ? 3 : 1) * (level > 5 ? 4 : 1)]
    r77: 0, // [AP = (level > 2 ? 3 : 1) * (level > 4 ? 4 : 1), Materials = (level > 1 ? 3 : 1) * (level > 3 ? 4 : 1) * (level > 5 ? 5 : 1)]
    r80: 0, // [AP = level > 3 ? 99 : 1, Materials = 8 * (level > 1) + 1, Mission Speed = (level > 4) + 1]
  },
  academy: {
    personnel: [
      {
        // Mining Pods
        power: 1,
        population: 0,
      },
      {
        // Fireteam Carriers
        power: 4,
        population: 0,
      },
      {
        // Titan Haulers
        power: 12,
        population: 0,
      },
      {
        // Combat Corvettes
        power: 16,
        population: 0,
      },
    ],
    farms: [
      [
        // Planet 1
        {
          // Farm 1-1
          pods: 0,
          fireteams: 0,
          titans: 0,
          corvettes: 0,
          locked: false,
        },
        {
          // Farm 1-2
          pods: 0,
          fireteams: 0,
          titans: 0,
          corvettes: 0,
          locked: false,
        },
        {
          // Farm 1-3
          pods: 0,
          fireteams: 0,
          titans: 0,
          corvettes: 0,
          locked: false,
        },
      ],
      [
        // Planet 2
        {
          // Farm 2-1
          pods: 0,
          fireteams: 0,
          titans: 0,
          corvettes: 0,
          locked: false,
        },
        {
          // Farm 2-2
          pods: 0,
          fireteams: 0,
          titans: 0,
          corvettes: 0,
          locked: false,
        },
        {
          // Farm 2-3
          pods: 0,
          fireteams: 0,
          titans: 0,
          corvettes: 0,
          locked: false,
        },
      ],
      [
        // Planet 3
        {
          // Farm 3-1
          pods: 0,
          fireteams: 0,
          titans: 0,
          corvettes: 0,
          locked: false,
        },
        {
          // Farm 3-2
          pods: 0,
          fireteams: 0,
          titans: 0,
          corvettes: 0,
          locked: false,
        },
        {
          // Farm 3-3
          pods: 0,
          fireteams: 0,
          titans: 0,
          corvettes: 0,
          locked: false,
        },
      ],
      [
        // Planet 4
        {
          // Farm 4-1
          pods: 0,
          fireteams: 0,
          titans: 0,
          corvettes: 0,
          locked: false,
        },
        {
          // Farm 4-2
          pods: 0,
          fireteams: 0,
          titans: 0,
          corvettes: 0,
          locked: false,
        },
        {
          // Farm 4-3
          pods: 0,
          fireteams: 0,
          titans: 0,
          corvettes: 0,
          locked: false,
        },
      ],
    ],
    farmYieldSetting: { type: 0, duration: 60 },
    farmYieldSelected: '1-h',
    stock: [0, 0, 0, 0, 0, 0, 0, 0],
    exchanges: {
      techSamples: 0,
      //
      fuelCells: 0,
      //
      dataCubes: 0,
    },
    projectLevels: [
      0 /* Cells Gained *= pow(4, level) */,
      0 /* All Gen Output *= pow(2, level) */,
      0 /* MP Gained *= pow(2, level) */,
      0 /* Shards Gained *= pow(2, level) */,
      0 /* RP Gained *= pow(2, level) */, 0 /* AP Gained *= pow(1.25, level) */,
      0 /* All Gen *= pow(3, level), RP *= pow(2.5, level), AP *= pow(1.6, level) */,
      0, 0,
    ],
    projectGoals: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    badges: {
      workers: false,
      innovation: false,
      tinkering: false,
      loopers: false,
      efficiency: false,
      engineering: false,
      darkInnovation: false,
    },
  },
  diamonds: {
    special: {
      materials: 0,
    },
    ultima: {
      materialBonus: 1,
    },
    iapCollector: false,
  },
  relics: {
    r3: 0,
    r5: 0,
    r20: 0,
  },
  ouro: {
    enabled: false,
    meltdown: 0.0001,
    gemCreationNode3Bonus: 1,
    darkInnovationBadge: false,
  },
  traits: {
    sphere04: false,
    sphere07: false,
    sphere09: false,
    sphere11: false,
    sphere12: false,
    sphere14: false,
  },
  knox: {
    necrumBonus: 1,
    highScore: 0,
    gadgets: {
      extractorDrill: 0,
      fragmentMagnet: 0,
    },
  },
}

const LSKey = 'CifiProjSave'

// Initializes to blank save in absence of preexisting save
let playerData = JSON.parse(localStorage.getItem(LSKey)) || blankPlayer

function savePlayerData(data) {
  localStorage.setItem(LSKey, JSON.stringify(data || playerData))
}

function loadPlayerData() {
  playerData = JSON.parse(localStorage.getItem(LSKey))
}

function resetPlayerData() {
  localStorage.removeItem(LSKey)
}

function ensurePlayerDataHas(propPath, defaultVal) {
  let subject = playerData
  const propChain = propPath.split('.')
  const lastIndex = propChain.length - 1
  propChain.forEach((prop, i) => {
    if (!Object.prototype.hasOwnProperty.call(subject, prop)) {
      if (i === lastIndex) {
        subject[prop] = defaultVal
      } else {
        subject[prop] = {}
      }
    }
  })
}

function migratePlayerData() {
  if (playerData.version < 15) {
    playerData = blankPlayer
  }

  ensurePlayerDataHas('knox.highScore', 0)
  ensurePlayerDataHas('traits', blankPlayer.traits)
  if (playerData.version < blankPlayer.version) {
    playerData.version = blankPlayer.version
  }

  savePlayerData()
}

migratePlayerData()
