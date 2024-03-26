import { config } from "../config.js";

export function drawGrid(ctx){
  const p = 0; // padding, is this needed?
  for (var x = 0; x <= config.canvas.width; x += config.canvas.cellWidth) {
    ctx.moveTo(0.5 + x + p, p);
    ctx.lineTo(0.5 + x + p, config.canvas.height + p);
  }

  for (var x = 0; x <= config.canvas.height; x += config.canvas.cellHeight) {
    ctx.moveTo(p, 0.5 + x + p);
    ctx.lineTo(config.canvas.width + p, 0.5 + x + p);
  }
  ctx.strokeStyle = "black";
  ctx.stroke();
}

export function outlineRect(opts) {
  const {
    dx,
    dy,
    dHeight,
    dWidth,
    color = 'orange',
  } = opts;
  ctx.moveTo(dx, dy);
  ctx.lineTo(dWidth, dy);
  ctx.lineTo(dWidth, dy + dHeight);
  ctx.lineTo(dx, dy + dHeight);
  ctx.lineTo(dx, dy);
  ctx.strokeStyle = color;
  ctx.stroke();
}
