let academyEffectorPortal = {
  pages: {
    default: {},
  },
}

const strings = {
  ULTIMA_REPLACEMENT_TEMPLATE: '{{ultimaMax}}',
}

const sections = [
  {
    name: 'General',
    children: [
      {
        id: 'playerLevel',
        type: 'number',
        label: 'Player Level',
        style: { width: 60 },
      },
      {
        id: 'loopsFilled',
        type: 'number',
        label: 'Loops Filled',
        style: { width: 80 },
      },
      { id: 'engineering', type: 'checkbox', label: 'Engineering Badge' },
      { id: 'ouroboros', type: 'checkbox', label: 'Ouroboros Unlocked' },
      { id: 'knox', type: 'checkbox', label: 'Knox Unlocked' },
    ],
  },
  {
    name: 'Loop Mods',
    children: [
      {
        id: 'zeusRankBenefits',
        type: 'number',
        label: 'Zeus Rank Benefits',
        max: 10,
        text: '/ 10',
        info: {
          type: 'mod',
          icon: 'zeus-rank-benefit.jpg',
          position: 'Left, Fleet zone',
          effect: '+1% mat per Zeus rank',
          cost: 'e98 mp',
        },
      },
      {
        id: 'materialHauling',
        type: 'number',
        label: 'Material Hauling',
        text: '/ 999',
        style: { width: 60 },
        info: {
          type: 'mod',
          icon: 'material-hauling.jpg',
          position: 'Right, Academy zone',
          effect: '+5% mat',
          cost: 'e169 mp',
        },
      },
      {
        id: 'ultimaBeyonders',
        type: 'number',
        label: 'Ultima: Rule of the Beyonders',
        style: { width: 80 },
        info: {
          type: 'mod',
          icon: 'rule-of-the-beyonders.jpg',
          position: 'Top',
          effect: '+1% mat',
          cost: 'e300 mp',
        },
      },
      {
        id: 'ultimaSwarm',
        type: 'number',
        label: 'Ultima: Rule of the Swarm',
        max: 30,
        text: `/ ${strings.ULTIMA_REPLACEMENT_TEMPLATE}`,
        info: {
          type: 'mod',
          icon: 'rule-of-the-swarm.jpg',
          position: 'Top',
          effect: '+51.11% mat, +3.11% speed',
          cost: 'e350 mp',
        },
      },
      {
        id: 'ultimaExpansion',
        type: 'number',
        label: 'Ultima: Rule of Expansion',
        style: { width: 80 },
        info: {
          type: 'mod',
          icon: 'rule-of-expansion.jpg',
          position: 'Right',
          effect: '+1% mat',
          cost: 'e300 mp',
        },
      },
      {
        id: 'ultimaProductivity',
        type: 'number',
        label: 'Ultima: Rule of Productivity',
        max: 10,
        text: `/ ${strings.ULTIMA_REPLACEMENT_TEMPLATE}`,
        info: {
          type: 'mod',
          icon: 'rule-of-productivity.jpg',
          position: 'Top-Right',
          effect: '+0.2% mat / PL, +10% speed',
          cost: 'e1020 mp',
        },
      },
      {
        id: 'ultimaLooping',
        type: 'number',
        label: 'Ultima: Rule of Looping',
        max: 10,
        text: `/ ${strings.ULTIMA_REPLACEMENT_TEMPLATE}`,
        info: {
          type: 'mod',
          icon: 'rule-of-looping.jpg',
          position: 'Top-Right',
          effect: '+0.02% mat / loop filled',
          cost: 'e1030 mp',
        },
      },
      {
        id: 'ultimaSekhur5',
        type: 'number',
        label: 'Ultima: Planet Sekhur-5',
        max: 1,
        text: `/ ${strings.ULTIMA_REPLACEMENT_TEMPLATE}`,
        isOuro: true,
      },
    ],
  },
  {
    name: 'Zeus',
    id: 'fleet.zeus',
    children: [
      { id: 'zeusrank', type: 'number', label: 'Rank' },
      { id: 'zeuscrew', type: 'number', label: 'Crew', style: { width: 60 } },
      {
        id: 'zeusprogress',
        type: 'number',
        label: 'To Next',
        text: ' ',
        textId: 'zeusrankrequirement',
        style: { width: 70 },
      },
      {
        id: 'materialScavengerVehicles',
        type: 'number',
        label:
          '<label class="has-tip" data-bs-toggle="tooltip" data-bs-title="Material Scavenger Vehicles">Install 3</label>',
        max: 5,
        textHtml:
          '/ <label class="has-tip" data-bs-toggle="tooltip" data-bs-title="Starts at 1, changes over time">5</label> <span class="text-super">*</c>',
      },
      {
        id: 'academyAutoScrappers',
        type: 'number',
        label:
          '<label class="has-tip" data-bs-toggle="tooltip" data-bs-title="Academy Auto-Scrappers">Install 6</label>',
        max: 75,
        textHtml:
          '/ <label class="has-tip" data-bs-toggle="tooltip" data-bs-title="Starts at 15, changes over time">75</label> <span class="text-super">*</c>',
      },
    ],
    style: 'min-width: 260px',
  },
  {
    name: 'Ouroboros',
    isOuro: true,
    children: [
      { id: 'ourocrew', type: 'number', label: 'Crew', style: { width: 60 } },
      {
        id: 'bioMaterialDuplicationTech',
        type: 'number',
        label:
          '<label class="has-tip" data-bs-toggle="tooltip" data-bs-title="Bio-Meterial Duplicatio Tech">Install 5</label>',
        max: 20,
      },
    ],
    style: 'min-width: 260px',
  },
  {
    name: 'Shard Milestone',
    children: [
      {
        id: 'wonderous',
        type: 'number',
        label: '(26) Wonderous',
        style: { width: 60 },
      },
      {
        id: 'earthly',
        type: 'number',
        label: '(29) Earthly',
        style: { width: 60 },
      },
    ],
  },
  {
    name: 'Diamond Shop',
    children: [
      {
        id: 'specialmats',
        type: 'number',
        label: 'Special: Mats',
        max: 30,
        text: '/ 30',
      },
      {
        id: 'ultimamatbonus',
        type: 'number',
        label:
          '<label class="has-tip" data-bs-toggle="tooltip" data-bs-title="Insert Bonus value, not level! e.g. 1.1">Ultima: Mats Bonus</label>',
        max: 30,
        isOuro: true,
      },
      { id: 'iapCollector', type: 'checkbox', label: 'IAP: Collectors Pack' },
    ],
  },
  {
    name: 'Research',
    children: [
      {
        id: 'research43',
        type: 'select',
        label: 'Research 43',
        maxLevel: 6,
        text: 'Material:  Lv2 x1.5, Lv4 x1.5, Lv6 x1.5',
        textClassName: 'font-normal',
      },
      {
        id: 'research55',
        type: 'select',
        label: 'Research 55',
        maxLevel: 6,
        text: 'Material:  Lv2 x1.75, Lv4 x1.75, Lv6 x1.75',
        textClassName: 'font-normal',
      },
      {
        id: 'research58',
        type: 'select',
        label: 'Research 58',
        maxLevel: 6,
        text: 'Speed: Lv1 x1.05, Lv3: x1.05, Lv5: x1.05',
        textClassName: 'font-normal',
      },
      {
        id: 'research60',
        type: 'select',
        label: 'Research 60',
        maxLevel: 6,
        text: 'Material:  Lv2 x5',
        textClassName: 'font-normal',
      },
      {
        id: 'research62',
        type: 'select',
        label: 'Research 62',
        maxLevel: 6,
        text: 'Proj Cost: - , /1.5 , - , /2, - , /2.5',
        textClassName: 'font-normal',
      },
      {
        id: 'research67',
        type: 'select',
        label: 'Research 67',
        maxLevel: 6,
        text: 'Material:  Lv2 x2, Lv4 x3, Lv6 x4',
        textClassName: 'font-normal',
      },
      {
        id: 'research70',
        type: 'select',
        label: 'Research 70',
        maxLevel: 6,
        text: 'Lv2: Material x5; Lv5: Speed x2',
        textClassName: 'font-normal',
      },
      {
        id: 'research72',
        type: 'select',
        label: 'Research 72',
        maxLevel: 6,
        text: 'Proj Cost: - , /2 , /3 , /3 , /4 , /4',
        textClassName: 'font-normal',
      },
      {
        id: 'research77',
        type: 'select',
        label: 'Research 77',
        maxLevel: 6,
        text: 'Material:  Lv2 x3, Lv4 x4, Lv6 x5',
        textClassName: 'font-normal',
      },
      {
        id: 'research80',
        type: 'select',
        label: 'Research 80',
        maxLevel: 6,
        text: 'Lv2: Material x9; Lv5: Speed x1.5',
        textClassName: 'font-normal',
      },
    ].map((i) => {
      i.labelClassName = 'font-normal'
      return i
    }),
  },
  {
    name: 'Ouro Content',
    isOuro: true,
    children: [
      {
        id: 'meltdown',
        type: 'number',
        label: 'Meltdown Effect',
        style: { width: 80 },
      },
      {
        id: 'relic3',
        type: 'number',
        label:
          '<label class="has-tip" data-bs-toggle="tooltip" data-bs-title="The Time-Glider Engine">Relic 3</label>',
        max: 100,
        text: '/ 100',
      },
      {
        id: 'relic5',
        type: 'number',
        label:
          '<label class="has-tip" data-bs-toggle="tooltip" data-bs-title="The Portable Pocket Dimension Storage Unit">Relic 5</label>',
        max: 8,
        text: '/ 8',
      },
      {
        id: 'relic20',
        type: 'number',
        label:
          '<label class="has-tip" data-bs-toggle="tooltip" data-bs-title="The Chrystonian Prism">Relic 20</label>',
        max: 100,
        text: '/ 100',
      },
      { id: 'darkinno', type: 'checkbox', label: 'Dark Innovation Badge' },
      {
        id: 'creationgemnode3bonus',
        type: 'number',
        label: 'Creation Gem Node #3 Bonus',
      },
    ],
  },
  {
    name: 'Trait Spheres',
    isOuro: true,
    children: [
      {
        id: 'sphere04',
        type: 'checkbox',
        label:
          '<label class="has-tip" data-bs-toggle="tooltip" data-bs-title="Increases Ultima Loop Mods max level by 1">Trait Sphere #04</label>',
      },
      {
        id: 'sphere07',
        type: 'checkbox',
        label:
          '<label class="has-tip" data-bs-toggle="tooltip" data-bs-title="Increases Missions per Mission Completed by x2">Trait Sphere #07</label>',
      },
      {
        id: 'sphere09',
        type: 'checkbox',
        label:
          '<label class="has-tip" data-bs-toggle="tooltip" data-bs-title="Increases Ultima Loop Mods max level by 2">Trait Sphere #09</label>',
      },
      {
        id: 'sphere11',
        type: 'checkbox',
        label:
          '<label class="has-tip" data-bs-toggle="tooltip" data-bs-title="Increases Ultima Loop Mods max level by 2">Trait Sphere #11</label>',
      },
      {
        id: 'sphere12',
        type: 'checkbox',
        label:
          '<label class="has-tip" data-bs-toggle="tooltip" data-bs-title="Increases Ultima Loop Mods max level by 2">Trait Sphere #12</label>',
      },
      {
        id: 'sphere14',
        type: 'checkbox',
        label:
          '<label class="has-tip" data-bs-toggle="tooltip" data-bs-title="Increases Ultima Loop Mods max level by 3">Trait Sphere #14</label>',
      },
    ]
  },
  {
    name: 'Knox Effects',
    isKnox: true,
    children: [
      {
        id: 'gadgetExtractorDrill',
        type: 'number',
        label: 'Gadget: Heavy-duty Auto Extractor Drill',
      },
      {
        id: 'gadgetFragmentMagnet',
        type: 'number',
        label: 'Gadget: Local Fragment Magnet',
      },
      {
        id: 'necrumBonus',
        type: 'number',
        label: 'Necrum Exchange Bonus',
        style: { width: 80 },
      },
      {
        id: 'sowSireneMats',
        type: 'number',
        label: 'Spoils of War: Sirene-6'
      }
    ]
  }
]

academyEffectorPortal.pages.default.dataLinkage = {
  /*
   * General
   */
  get playerLevel() {
    return playerData.general.level
  },
  set playerLevel(value) {
    playerData.general.level = value
  },

  get loopsFilled() {
    return playerData.general.loopsFilled
  },
  set loopsFilled(value) {
    playerData.general.loopsFilled = value
  },

  get engineering() {
    return playerData.general.engineeringBadge
  },
  set engineering(value) {
    playerData.general.engineeringBadge = value
  },

  get ouroboros() {
    return playerData.general.ouroEnabled
  },
  set ouroboros(value) {
    playerData.general.ouroEnabled = value
  },

  get knox() {
    return playerData.general.knoxEnabled
  },
  set knox(value) {
    return playerData.general.knoxEnabled = value
  },

  /*
   * Loop Mods
   */
  get zeusRankBenefits() {
    return playerData.loopMods.zeusRankBenefits
  },
  set zeusRankBenefits(value) {
    playerData.loopMods.zeusRankBenefits = value
  },

  get materialHauling() {
    return playerData.loopMods.materialHauling
  },
  set materialHauling(value) {
    playerData.loopMods.materialHauling = value
  },

  get ultimaBeyonders() {
    return playerData.loopMods.beyonders
  },
  set ultimaBeyonders(value) {
    playerData.loopMods.beyonders = value
  },

  get ultimaSwarm() {
    return playerData.loopMods.swarm
  },
  set ultimaSwarm(value) {
    playerData.loopMods.swarm = value
  },
  
  get ultimaExpansion() {
    return playerData.loopMods.expansion
  },
  set ultimaExpansion(value) {
    playerData.loopMods.expansion = value
  },
  
  get ultimaProductivity() {
    return playerData.loopMods.productivity
  },
  set ultimaProductivity(value) {
    playerData.loopMods.productivity = value
  },
  
  get ultimaLooping() {
    return playerData.loopMods.looping
  },
  set ultimaLooping(value) {
    playerData.loopMods.looping = value
  },
  
  get ultimaSekhur5() {
    return playerData.loopMods.sekhur5
  },
  set ultimaSekhur5(value) {
    playerData.loopMods.sekhur5 = value
  },

  /*
   * Ships
   */
  get zeuscrew() {
    return playerData.fleet.zeus.crew
  },
  set zeuscrew(value) {
    playerData.fleet.zeus.crew = value
  },

  get zeusrank() {
    return playerData.fleet.zeus.rank.current
  },
  set zeusrank(value) {
    playerData.fleet.zeus.rank.current = value
  },

  get zeusprogress() {
    return playerData.fleet.zeus.rank.progress
  },
  set zeusprogress(value) {
    playerData.fleet.zeus.rank.progress = value
  },

  get materialScavengerVehicles() {
    return playerData.fleet.zeus.vehicles
  },
  set materialScavengerVehicles(value) {
    playerData.fleet.zeus.vehicles = value
  },

  get academyAutoScrappers() {
    return playerData.fleet.zeus.scrappers
  },
  set academyAutoScrappers(value) {
    playerData.fleet.zeus.scrappers = value
  },

  get ourocrew() {
    return playerData.fleet.ouro.crew
  },
  set ourocrew(value) {
    playerData.fleet.ouro.crew = value
  },

  get bioMaterialDuplicationTech() {
    return playerData.fleet.ouro.bioMaterial
  },
  set bioMaterialDuplicationTech(value) {
    playerData.fleet.ouro.bioMaterial = value
  },

  /*
   * Academy
   */
  get warpdrive() {
    return playerData.academy.projectLevels[5]
  },
  set warpdrive(value) {
    playerData.academy.projectLevels[5] = value
  },


  /*
   * Shard Milestones
   */
  get wonderous() {
    return playerData.shardMilestones.wonderous
  },
  set wonderous(value) {
    playerData.shardMilestones.wonderous = value
  },
  get earthly() {
    return playerData.shardMilestones.earthly
  },
  set earthly(value) {
    playerData.shardMilestones.earthly = value
  },

  /*
   * Researches
   */
  get research43() {
    return playerData.research.r43
  },
  set research43(value) {
    playerData.research.r43 = value
  },

  get research55() {
    return playerData.research.r55
  },
  set research55(value) {
    playerData.research.r55 = value
  },

  get research58() {
    return playerData.research.r58
  },
  set research58(value) {
    playerData.research.r58 = value
  },

  get research60() {
    return playerData.research.r60
  },
  set research60(value) {
    playerData.research.r60 = value
  },

  get research62() {
    return playerData.research.r62
  },
  set research62(value) {
    playerData.research.r62 = value
  },

  get research67() {
    return playerData.research.r67
  },
  set research67(value) {
    playerData.research.r67 = value
  },

  get research70() {
    return playerData.research.r70
  },
  set research70(value) {
    playerData.research.r70 = value
  },

  get research72() {
    return playerData.research.r72
  },
  set research72(value) {
    playerData.research.r72 = value
  },

  get research77() {
    return playerData.research.r77
  },
  set research77(value) {
    playerData.research.r77 = value
  },

  get research80() {
    return playerData.research.r80
  },
  set research80(value) {
    playerData.research.r80 = value
  },

  /*
   * Diamonds
   */
  get specialmats() {
    return playerData.diamonds.special.materials
  },
  set specialmats(value) {
    playerData.diamonds.special.materials = value
  },

  get ultimamatbonus() {
    return playerData.diamonds.ultima.materialBonus
  },
  set ultimamatbonus(value) {
    playerData.diamonds.ultima.materialBonus = value
  },

  get iapCollector() {
    return playerData.diamonds.iapCollector
  },
  set iapCollector(value) {
    playerData.diamonds.iapCollector = value
  },

  /*
   * Ouro Content
   */
  get meltdown() {
    return playerData.ouro.meltdown
  },
  set meltdown(value) {
    playerData.ouro.meltdown = value
  },

  get relic3() {
    return playerData.relics.r3
  },
  set relic3(value) {
    playerData.relics.r3 = value
  },

  get relic5() {
    return playerData.relics.r5
  },
  set relic5(value) {
    playerData.relics.r5 = value
  },

  get relic20() {
    return playerData.relics.r20
  },
  set relic20(value) {
    playerData.relics.r20 = value
  },

  get darkinno() {
    return playerData.ouro.darkInnovationBadge
  },
  set darkinno(value) {
    playerData.ouro.darkInnovationBadge = value
  },

  get creationgemnode3bonus() {
    return playerData.ouro.gemCreationNode3Bonus
  },
  set creationgemnode3bonus(value) {
    playerData.ouro.gemCreationNode3Bonus = value
  },

  /*
   * Knox Content
   */
  get gadgetExtractorDrill() {
    return playerData.knox.gadgets.extractorDrill
  },
  set gadgetExtractorDrill(value) {
    playerData.knox.gadgets.extractorDrill = value
  },

  get gadgetFragmentMagnet() {
    return playerData.knox.gadgets.fragmentMagnet
  },
  set gadgetFragmentMagnet(value) {
    playerData.knox.gadgets.fragmentMagnet = value
  },

  get necrumBonus() {
    return playerData.knox.necrumBonus
  },
  set necrumBonus(value) {
    playerData.knox.necrumBonus = value
  },

  get sowSireneMats() {
    return playerData.loopMods.sowSireneMats
  },
  set sowSireneMats(value) {
    playerData.loopMods.sowSireneMats = value
  },

  /*
   * Trait Spheres
   */
  get sphere04() {
    return playerData.traits.sphere04
  },
  set sphere04(value) {
    playerData.traits.sphere04 = value
  },

  get sphere07() {
    return playerData.traits.sphere07
  },
  set sphere07(value) {
    playerData.traits.sphere07 = value
  },

  get sphere09() {
    return playerData.traits.sphere09
  },
  set sphere09(value) {
    playerData.traits.sphere09 = value
  },

  get sphere11() {
    return playerData.traits.sphere11
  },
  set sphere11(value) {
    playerData.traits.sphere11 = value
  },

  get sphere12() {
    return playerData.traits.sphere12
  },
  set sphere12(value) {
    playerData.traits.sphere12 = value
  },

  get sphere14() {
    return playerData.traits.sphere14
  },
  set sphere14(value) {
    playerData.traits.sphere14 = value
  },
}

academyEffectorPortal.pages.default.initFunction = function (panel) {
  const wrapper = createElement('div', 'section-2', { style: 'gap: 20px' })

  const ouroEnabled = !!portalPanel.dataLinkage.ouroboros
  const knoxEnabled = !!portalPanel.dataLinkage.knox
  const initialUltimaMaxIncrease = CalculateUltimaMaxIncrease()

  sections.forEach(({ name, children, style, isOuro, isKnox }) => {
    if (isOuro && !ouroEnabled) return
    if (isKnox && !knoxEnabled) return

    const section = createElement('div', 'section-3', { style })
    const header = createElement('h5', '', null, name)
    section.appendChild(header)

    children
      .map(({ id, label, type, text, style = {}, info, ...props }) => {
        if (props.isOuro && !ouroEnabled) return

        if (['select', 'number', 'checkbox'].includes(type)) {
          const group = createElement(
            'div',
            'd-flex align-items-center column-gap-2 mb-2',
          )

          // label
          const labelWrapper = $('<div>').addClass(
            props.labelClassName ? props.labelClassName : 'flex-fill',
          )
          const labelEl = $('<label>')
            .addClass('col-form-label col-form-label-sm')
            .html(label)
          if (info) {
            if (info.type === 'mod') {
              labelEl
                .addClass('has-tip')
                .attr('data-bs-container', 'body')
                .attr('data-bs-toggle', 'popover')
                .attr('data-bs-trigger', 'hover focus')
                .attr('data-bs-placement', 'top')
                .attr('data-bs-html', 'true')
                .attr(
                  'data-bs-title',
                  [
                    '<div>',
                    `<img src="assets/loopmod/${info.icon}" class="loopmod-tip-icon" />`,
                    label,
                    '</div>',
                  ].join(''),
                )
                .attr(
                  'data-bs-content',
                  [
                    '<div>',
                    `<div><strong>Position:</strong> ${info.position}</div>`,
                    `<div><strong>Effect:</strong> ${info.effect}</div>`,
                    `<div><strong>Starting Cost:</strong> ${info.cost}</div>`,
                    '</div>',
                  ].join(''),
                )
            }
          }

          labelWrapper.append(labelEl).appendTo($(group))

          // input
          const inputWrapper = createElement('div', '')
          group.appendChild(inputWrapper)

          if (type === 'number') {
            const input = createElement(
              'input',
              'form-control form-control-sm text-center',
              {
                id: id,
                type: 'number',
                min: 0,
                style: `width: ${style.width || 50}px;`,
                value: portalPanel.dataLinkage[id],
              },
            )
            if (props.max) input.max = props.max
            input.addEventListener('change', portalPanel.updateFunction)
            inputWrapper.appendChild(input)
          }

          if (type === 'select') {
            const select = createElement(
              'select',
              'form-select form-select-sm',
              {
                id: id,
              },
            )
            if (props.maxLevel) {
              select.innerHTML =
                '<option value="0">-</option>' +
                Array(props.maxLevel)
                  .fill(null)
                  .map(
                    (_, i) => `<option value="${i + 1}">Lv ${i + 1}</option>`,
                  )
                  .join('')
            } else {
              select.innerHTML = props.options
                .map((p) => `<option value="${p.value}">${p.label}</option>`)
                .join('')
            }
            select.value = portalPanel.dataLinkage[id] * 1
            select.addEventListener('change', portalPanel.updateFunction)
            inputWrapper.appendChild(select)
          }

          if (type === 'checkbox') {
            const input = createElement('input', 'form-check-input', {
              id,
              type: 'checkbox',
            })
            input.checked = portalPanel.dataLinkage[id]
            input.addEventListener('change', portalPanel.updateFunction)
            inputWrapper.appendChild(input)
          }

          if (text || props.textHtml) {
            const str = `${text}`
            if (str.includes(strings.ULTIMA_REPLACEMENT_TEMPLATE)) {
              str.replace(strings.ULTIMA_REPLACEMENT_TEMPLATE, initialUltimaMaxIncrease)
            }
            const textCol = createElement('div', '')
            const textEl = createElement('span', 'form-text', '', str || '')
            if (props.textHtml) {
              textEl.innerHTML = props.textHtml
            }
            if (props.textId) {
              textEl.id = props.textId
              portalPanel[props.textId] = textEl
            }
            if (props.textClassName) textEl.classList.add(props.textClassName)
            textCol.appendChild(textEl)
            group.appendChild(textCol)
          }

          return group
        }

        return null
      })
      .filter(Boolean)
      .forEach((el) => section.appendChild(el))

    wrapper.appendChild(section)
  })

  try {
    const tips = [
      "After complete all form inputs, cross check numbers in 2nd and 3rd tabs displaying in small texts with in-game values for validation. Don't forget to update Proj #9 if you've unlocked it before validating.",
      'Some researches are named wrong in-game, try match them with research bonus instead.',
    ]

    $(
      '<div class="section-3 font-normal" style="font-size: 0.8em; max-width: 400px;">',
    )
      .append($('<h6>Tips</h6>'))
      .append($('<ol>').append(tips.map((tip) => $('<li>').text(tip))))
      .appendTo(wrapper)
  } catch (e) {
    console.error(e)
  }

  panel.appendChild(wrapper)

  portalPanel['zeusrankrequirement'].innerText =
    '/ ' +
    (GameDB.fleet.zeus.rankRequirements[portalPanel.dataLinkage.zeusrank] ||
      'no data')

  initTooltips()
  initPopovers()
}

academyEffectorPortal.pages.default.updateFunction = function (e) {
  if (/^select$/i.test(e.target.tagName)) {
    portalPanel.dataLinkage[e.target.id] = parseInt(e.target.value, 10)
    savePlayerData()
    return
  }

  if (e.target.type === 'checkbox') {
    portalPanel.dataLinkage[e.target.id] = e.target.checked
    savePlayerData()

    if (e.target.id === 'ouroboros') {
      location.reload()
    }

    if (e.target.id?.startsWith('sphere')) {
      updateUltimaMaximums()
    }

    return
  }

  if (e.target.type === 'number') {
    if (
      ['meltdown', 'ultimamatbonus', 'creationgemnode3bonus'].indexOf(
        e.target.id,
      ) > -1
    ) {
      portalPanel.dataLinkage[e.target.id] = parseFloat(e.target.value)
    } else {
      portalPanel.dataLinkage[e.target.id] = parseInt(e.target.value)
    }
    savePlayerData()

    if (e.target.id === 'zeusrank') {
      portalPanel['zeusrankrequirement'].innerText =
        '/ ' +
        (GameDB.fleet.zeus.rankRequirements[
          portalPanel.dataLinkage[e.target.id]
        ] || 'no data')
    }

    return
  }

  let value = parseBigNum(e.target.value)
  if (isNaN(value)) {
    e.target.value = 0
  } else {
    portalPanel.dataLinkage[e.target.id] = value
  }
  savePlayerData()
}

function updateUltimaMaximums() {
  const increase = CalculateUltimaMaxIncrease()
  sections.find((section) => section.name === 'Loop Mods').children.forEach((field) => {
    if (field.text && field.text.includes(strings.ULTIMA_REPLACEMENT_TEMPLATE)) {
      const textElm = document.getElementById(field.id).parentElement.nextElementSibling?.querySelector('.form-text')
      if (textElm) textElm.innerHTML = field.text.replace(strings.ULTIMA_REPLACEMENT_TEMPLATE, increase)
    }
  })
}
