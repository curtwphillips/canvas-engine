// take a sprite section and starting point and draw to ending point
import { ctx } from "../canvas.js";
import { config } from "../config.js";

const { padding: p } = config.sprites;

export const drawSpriteSection = (opts) => {
  const {
    spriteSheet,
    sectionName,
    isAnimated,
    frame, // optional for isAnimated
    repeatHorizontal = 1,
    repeatVertical = 1,
    outline = false,
  } = opts;

  let {
    canvasColumnSpan,
    canvasRowSpan,
    canvasStartColumn,
    canvasStartRow,
  } = opts;

  if (isAnimated) {
    console.debug('***** opts:', opts);
  }

  const section = spriteSheet.sections[sectionName];

  let sx;
  let sy;
  let spriteWidth;
  let spriteHeight;
  if (isAnimated) {
    sx = (frame - 1) * section.width;
    sy = 0;
    spriteHeight = section.height;
    spriteWidth = section.width;

    if (isAnimated) {
      console.debug('frame:', frame, ', section.width:', section.width);
    }
  } else {
    canvasColumnSpan = section.endColumn - section.startColumn;
    canvasRowSpan = section.endRow - section.startRow;

    sx = section.startColumn * spriteSheet.cellWidth;
    sy = section.startRow * spriteSheet.cellHeight;
    // width of 1 sprite * number of sprites wide
    spriteWidth = spriteSheet.cellWidth * canvasColumnSpan;
    // height of 1 sprite * number of sprites tall
    spriteHeight = spriteSheet.cellHeight * canvasRowSpan;
  }

  const maxLimit = 1000;
  let limit = 0;
  const originalCanvasStartRow = canvasStartRow
  for (let i = 0; i < repeatHorizontal; i++) {
    limit++;
    canvasStartRow = originalCanvasStartRow;
    for (let j = 0; j < repeatVertical; j++) {
      limit++;
      const dx = canvasStartColumn * config.canvas.cellWidth;
      const dy = canvasStartRow * config.canvas.cellHeight;
      const dWidth = canvasColumnSpan * config.canvas.cellWidth;
      const dHeight = canvasRowSpan * config.canvas.cellHeight;

      if (isAnimated) {
        console.debug('canvasColumnSpan:', canvasColumnSpan, ', canvasRowSpan:', canvasRowSpan, ', sx:', sx, ', sy:', sy, ', spriteWidth:', spriteWidth, ', spriteHeight:', spriteHeight, ',dx:', dx, ', dy:', dy, ', dWidth:', dWidth, ', dHeight:', dHeight)
      }

      // s = source, d = destination
      // drawImage(img, sx, sy, swidth, sheight, dx, dy, dwidth, dheight)
      ctx.drawImage(section.img || spriteSheet.img, sx, sy, spriteWidth, spriteHeight, dx, dy, dWidth + p, dHeight + p);

      if (outline) {
        outlineRect({
          dx,
          dy,
          dHeight,
          dWidth,
          color: 'green',
        })
      }

      if (isAnimated) {
        console.debug('draw values:', 'sx:', sx, ', sy:', sy, ', spriteWidth:', spriteWidth, ', spriteHeight:', spriteHeight, ', dx:', dx, ', dy:', dy, ', dWidth:', dWidth, ', dHeight:', dHeight);
      }

      if (limit > maxLimit) {
        throw new Error('max limit hit');
      }
      canvasStartRow = canvasStartRow + canvasRowSpan;
    }
    if (limit > maxLimit) {
      throw new Error('max limit hit');
    }
    canvasStartColumn = canvasStartColumn + canvasColumnSpan;
  }




  // ctx.drawImage(spriteSheet.img, sx, sy, spriteWidth, spriteHeight, 0, 0, config.canvas.width, config.canvas.height);
};
