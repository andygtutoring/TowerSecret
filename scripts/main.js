// main.js
const canvas = document.getElementById('gameCanvas');
const game = new Game(canvas);
const player = game.player;

game.startGame();
setInterval(() => {
  game.update();
  game.draw();
}, 1000 / 60);

// For mobile devices, use onscreen UI up and down buttons.
const upButton = document.createElement('button');
upButton.textContent = 'Up';
upButton.style.position = 'absolute';
upButton.style.top = '80%';
upButton.style.left = '40%';
document.body.appendChild(upButton);

const downButton = document.createElement('button');
downButton.textContent = 'Down';
downButton.style.position = 'absolute';
downButton.style.top = '90%';
downButton.style.left = '40%';
document.body.appendChild(downButton);

upButton.addEventListener('touchstart', () => {
  player.update('up');
});

downButton.addEventListener('touchstart', () => {
  player.update('down');
});

// For keyboard controllers only
document.addEventListener('keydown', event => {
  if (event.key === 'ArrowUp') {
    player.update('up');
  } else if (event.key === 'ArrowDown') {
    player.update('down');
  }
});

/***
 * Alternatively, consider using swipe gestures (swipe up and swipe down to move).
 * 
let swipeStartY;

document.addEventListener('touchstart', (event) => {
  swipeStartY = event.touches[0].clientY;
});

document.addEventListener('touchend', (event) => {
  const swipeEndY = event.changedTouches[0].clientY;
  const swipeDistance = swipeStartY - swipeEndY;

  if (swipeDistance > 50) {
    player.update('up');
  } else if (swipeDistance < -50) {
    player.update('down');
  }
});
 * 
 * 
 **/

