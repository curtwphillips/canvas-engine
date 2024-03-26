import { drawSpriteSection } from "../draw/sprites.js";
import { pressedKeys } from "../inputs/keyboard.js";
import { characterSprites } from "../sprites/character.js";

export class Player {
  constructor() {
    console.debug('***** start constructor');
    this.staggerLimit = 13;
    this.playerState = 'idle';
    this.stagger = 0;
    this.frame = 1;
    this.movementCanvasColumnSpeed = 1;
    this.isAnimated = true;
    this.canvasStartColumn = 5;
    this.canvasStartRow = 5;
    this.canvasColumnSpan = 8;
    this.canvasRowSpan = 8;
    this.sections = characterSprites.sections;
    console.debug('***** this.playerState:', this.playerState);
  }
  draw() {
    let playerActiveSprite = characterSprites.sections[this.playerState];
    console.debug('**** characterSprites:', characterSprites, ', this.playerState:', this.playerState, ', playerActiveSprite:', playerActiveSprite)
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
      spriteSheet: characterSprites,
    })
  }
  update() {
    if (pressedKeys['ArrowLeft']) {
      this.playerState = 'run';
      this.canvasStartColumn -= 1;
      return;
    }
    if (pressedKeys['ArrowRight']) {
      this.playerState = 'run';
      this.canvasStartColumn += 1;
      return;
    }
    if (pressedKeys['ArrowUp']) {
      this.playerState = 'run';
      this.canvasStartRow -= 1;
      return;
    }
    if (pressedKeys['ArrowDown']) {
      this.playerState = 'run';
      this.canvasStartRow += 1;
      return;
    }
    this.playerState = 'idle';
    return
  }
}

for (let key in characterSprites.sections) {
  characterSprites.sections[key].width = characterSprites.sections[key].fullWidth / characterSprites.sections[key].spriteCount;
}
