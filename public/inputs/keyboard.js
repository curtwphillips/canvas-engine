// https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/
export const pressedKeys = {
  ArrowLeft: false,
  ArrowUp: false,
  ArrowRight: false,
  ArrowDown: false,
}

const validKeys = Object.keys(pressedKeys);

// for keys that do nothing from holding down key
export function checkKeyAndUnpress(key) {
  if (pressedKeys[key]) {
    pressedKeys[key] = false;
    return true;
  }
  return false;
}

document.addEventListener('keydown', (event)=> {
  // console.debug(event); // all event related info
  // console.debug(event.type);
  // console.debug(event.key);
  // console.debug(event.code);
  if (validKeys.includes(event.key)) {
    pressedKeys[event.key] = true;
  }
});

document.addEventListener('keyup', (event)=> {
  // console.debug(event); // all event related info
  // console.debug(event.type);
  // console.debug(event.key);
  // console.debug(event.code);
  if (validKeys.includes(event.key)) {
    pressedKeys[event.key] = false;
  }
});
