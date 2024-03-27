import { drawSpriteSection } from "../draw/sprites.js";
import { pressedKeys } from "../inputs/keyboard.js";
import { playerGhostySprites } from "../sprites/playerGhostySprites.js";

export class GhostyPlayer {
  constructor() {
    console.debug('***** start constructor');
    this.staggerLimit = 0;
    this.playerState = 'idle';
    this.stagger = 0;
    this.frame = 1;
    this.movementCanvasColumnSpeed = .01;
    this.velocity = 5;
    this.isAnimated = true;
    this.canvasStartColumn = 5;
    this.canvasStartRow = 1;
    this.canvasColumnSpan = 1;
    this.canvasRowSpan = 2;
    this.sections = playerGhostySprites.sections;
    console.debug('***** this.playerState:', this.playerState);
  }
  draw() {
    let playerActiveSprite = playerGhostySprites.sections[this.playerState];
    console.debug('**** playerGhostySprites:', playerGhostySprites, ', this.playerState:', this.playerState, ', playerActiveSprite:', playerActiveSprite)
    if (this.stagger < this.staggerLimit) {
      this.stagger++;
    } else {
      this.update();
      this.stagger = 0;
      if (this.frame >= playerActiveSprite.spriteCount) {
        this.frame = 1;
      } else {
        this.frame++;
      }
    }
    drawSpriteSection({
      canMove: true,
      canvasColumnSpan: this.canvasColumnSpan,
      canvasRowSpan: this.canvasRowSpan,
      canvasStartColumn: this.canvasStartColumn,
      canvasStartRow: this.canvasStartRow,
      frame: this.frame,
      isAnimated: true,
      repeatHorizontal: 1,
      repeatVertical: 1,
      sectionName: this.playerState,
      spriteSheet: playerGhostySprites,
    })
  }
  update() {
    if (pressedKeys['ArrowLeft']) {
      this.playerState = 'idle';
      this.canvasStartColumn -= 1;
      return;
    }
    if (pressedKeys['ArrowRight']) {
      this.playerState = 'idle';
      this.canvasStartColumn += 1;
      return;
    }
    if (pressedKeys['ArrowUp']) {
      this.playerState = 'idle';
      this.canvasStartRow -= 1;
      return;
    }
    if (pressedKeys['ArrowDown']) {
      this.playerState = 'idle';
      this.canvasStartRow += 1;
      return;
    }
    this.playerState = 'idle';
    return
  }
}

for (let key in playerGhostySprites.sections) {
  playerGhostySprites.sections[key].width = playerGhostySprites.sections[key].fullWidth / playerGhostySprites.sections[key].spriteCount;
}
