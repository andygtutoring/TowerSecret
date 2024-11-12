// Player.Class.js

class Player {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.speed = 5;
    this.score = 0;
    this.powerUp = false;
    this.image = new Image();
    this.image.src = 'images/player.png';
  }

  draw() {
    this.ctx.drawImage(this.image, this.x, this.y);
  }

  update(direction) {
    if (direction === 'up' && this.y > 0) {
      this.y -= this.speed;
    } else if (direction === 'down' && this.y < this.canvas.height - 50) {
      this.y += this.speed;
    }
  }
}
