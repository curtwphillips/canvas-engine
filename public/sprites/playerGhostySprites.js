const defaultSpriteConfig = {
  fullHeight: 32,
  height: 32,
};

export const playerGhostySprites = {
  sections: {
    idle:  {
      ...defaultSpriteConfig,
      img: document.getElementById('ghosty'),
      spriteCount: 1,
      fullWidth: 32,
      name: 'idle',
    },
  }
}
