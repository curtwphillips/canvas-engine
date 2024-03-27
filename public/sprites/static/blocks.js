export const stoneBlocksSpriteSheet = {
  img: document.getElementById('stone-blocks'),
  fullWidth: 162, // 9 columns
  fullHeight: 162, // 9 rows
  cellWidth: 18,
  cellHeight: 18,
  name: 'stone-blocks',
  sections: {
    pushBlock: {
      startRow: 1,
      endRow: 2,
      startColumn: 0,
      endColumn: 1,
    },
    stillBlock: {
      startRow: 0,
      endRow: 1,
      startColumn: 0,
      endColumn: 1,
    }
  }
};
