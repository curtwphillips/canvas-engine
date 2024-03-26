const rows = 16;
const columns = 16;
const cellHeight = 32;
const cellWidth = 32;

export const config = {
  debugging: {
    log: false,
    spritePlacement: false,
    grid: true,
  },
  canvas: {
    rows,
    columns,
    cellHeight,
    cellWidth,
    height: rows * cellHeight,
    width: columns * cellWidth,
  },
  sprites: {
    padding: 10,
  }
}

if (config.debugging.log) {
  console.debug = console.log;
} else {
  console.debug = () => {};
}
