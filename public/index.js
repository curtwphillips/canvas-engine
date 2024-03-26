import { drawSpriteSection } from "./draw/sprites.js";
import { config } from "./config.js";
import { drawGrid } from "./draw/grid.js";
import { castleWallsSideTop } from "./sprites/static/castleWallsSideTop.js";
import { castleGroundSpriteSheet } from './sprites/static/castleGround.js';
import { characterSprites } from "./sprites/character.js";
import { Player } from "./Player/Player.js";
import { canvas, ctx } from "./canvas.js";

const player = new Player();

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
  player.draw();

  requestAnimationFrame(animate);
}

animate();
