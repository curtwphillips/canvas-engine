export const castleWallsSideTop = {
  img: document.getElementById('castle-walls-side-top'),
  fullWidth: 480, // 30 columns 16 each, grid has 60 squares
  fullHeight: 304, // 19 rows 16 each, grid in png shows ? rows
  cellWidth: 16,
  cellHeight: 16,
  name: 'castleWallsSideTop',
  sections: {
    topWall: {
      startRow: 2.75,
      endRow: 5,
      startColumn: 19,
      endColumn: 23,
    },
  }
};
