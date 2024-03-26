export const castleGroundSpriteSheet = {
  img: document.getElementById('castle-ground'),
  fullWidth: 304, // 19 columns 16 each
  fullHeight: 224, // 14 rows 16 each, grid in png shows 28 rows
  cellWidth: 16,
  cellHeight: 16,
  name: 'castleGround',
  sections: {
    mainFloor: {
      startRow: 12.75,
      endRow: 13.25,
      startColumn: 1.5,
      endColumn: 2.5,
    },
    bottomFloor: {
      startRow: 12.75,
      endRow: 14,
      startColumn: 0,
      endColumn: 6,
    }
  }
};
