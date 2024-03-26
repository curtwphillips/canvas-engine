import { config } from "./config.js";

export const canvas = document.getElementById('game-canvas');
export const ctx = canvas.getContext('2d');

canvas.width = config.canvas.cellWidth * config.canvas.columns;
canvas.height = config.canvas.cellHeight * config.canvas.rows;

// const dropdown = document.getElementById('animations');
// dropdown.addEventListener('change', (e) => {
//   playerState = e.target.value;
// })
