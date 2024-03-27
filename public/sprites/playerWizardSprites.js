const defaultSpriteConfig = {
  fullHeight: 190,
  height: 190,
};

export const playerWizardSprites = {
  sections: {
    attack1: {
      ...defaultSpriteConfig,
      img: document.getElementById('wizard-attack-1'),
      spriteCount: 8,
      fullWidth: 1848,
      name: 'attack1',
    },
    attack2: {
      ...defaultSpriteConfig,
      img: document.getElementById('wizard-attack-2'),
      spriteCount: 8,
      fullWidth: 1848,
      name: 'attack2',
    },
  death: {
      ...defaultSpriteConfig,
      img: document.getElementById('wizard-death'),
      spriteCount: 7,
      fullWidth: 1617,
      name: 'death',
    },
    fall: {
      ...defaultSpriteConfig,
      img: document.getElementById('wizard-fall'),
      spriteCount: 2,
      fullWidth: 462,
      name: 'fall',
    },
    hit:  {
      ...defaultSpriteConfig,
      img: document.getElementById('wizard-hit'),
      spriteCount: 4,
      fullWidth: 924,
      name: 'hit',
    },
    idle:  {
      ...defaultSpriteConfig,
      img: document.getElementById('wizard-idle'),
      spriteCount: 6,
      fullWidth: 1386,
      name: 'idle',
    },
    jump:  {
      ...defaultSpriteConfig,
      img: document.getElementById('wizard-jump'),
      spriteCount: 2,
      fullWidth: 462,
      name: 'jump',
    },
    run:  {
      ...defaultSpriteConfig,
      img: document.getElementById('wizard-run'),
      spriteCount: 8,
      fullWidth: 1848,
      name: 'run',
    },
  }
}
