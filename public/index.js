import { drawSpriteSection } from "./draw/sprites.js";
import { config } from "./config.js";
import { drawGrid } from "./draw/grid.js";
import { castleWallsSideTop } from "./sprites/static/castleWallsSideTop.js";
import { castleGroundSpriteSheet } from './sprites/static/castleGround.js';
import { stoneBlocksSpriteSheet } from './sprites/static/blocks.js'
import { playerWizardSprites } from "./sprites/playerWizardSprites.js";
import { playerGhostySprites } from './sprites/playerGhostySprites.js';
import { GhostyPlayer } from './Player/GhostyPlayer.js';
import { canvas, ctx } from "./canvas.js";

const player = new GhostyPlayer();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (config.debugging.grid) {
    drawGrid(ctx);
  }
  // (ctx, spriteSheet, sectionName, canvasStartColumn, canvasStartRow, repeateHorizontal, repeatVertical)
  drawSpriteSection({
    ctx,
    spriteSheet: castleGroundSpriteSheet,
    sectionName: 'mainFloor',
    canvasStartColumn: 0,
    canvasStartRow: 0,
    repeatHorizontal: 16,
    repeatVertical: 32,
  });
  drawSpriteSection({
    ctx,
    spriteSheet: castleWallsSideTop,
    sectionName: 'topWall',
    canvasStartColumn: 0,
    canvasStartRow: 0,
    repeatHorizontal: 4,
    repeatVertical: 1,
  })
  drawSpriteSection({
    ctx,
    spriteSheet: stoneBlocksSpriteSheet,
    sectionName: 'pushBlock',
    canvasStartColumn: 2,
    canvasStartRow: 6,
    repeatHorizontal: 1,
    repeatVertical: 1,
  })
  drawSpriteSection({
    ctx,
    spriteSheet: stoneBlocksSpriteSheet,
    sectionName: 'stillBlock',
    canvasStartColumn: 5,
    canvasStartRow: 5,
    repeatHorizontal: 2,
    repeatVertical: 1,
  })
  
  player.draw();

  requestAnimationFrame(animate);
}

animate();
