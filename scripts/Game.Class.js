// Game.Class.js

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.player = new Player(canvas);
    this.coins = [];
    this.obstacles = [];
    this.powerUps = [];
    this.coinInterval = null;
    this.obstacleInterval = null;
    this.powerUpInterval = null;
    this.score = 0;
  }

  startGame() {
    this.coinInterval = setInterval(() => {
      this.coins.push({
        x: Math.random() * (this.canvas.width - 20),
        y: Math.random() * (this.canvas.height - 20),
        image: new Image()
      });
      this.coins[this.coins.length - 1].image.src = 'images/coin.png';
    }, 2000);

    this.obstacleInterval = setInterval(() => {
      this.obstacles.push({
        x: Math.random() * (this.canvas.width - 20),
        y: Math.random() * (this.canvas.height - 20),
        image: new Image()
      });
      this.obstacles[this.obstacles.length - 1].image.src = 'images/obstacle.png';
    }, 3000);

    this.powerUpInterval = setInterval(() => {
      this.powerUps.push({
        x: Math.random() * (this.canvas.width - 20),
        y: Math.random() * (this.canvas.height - 20),
        image: new Image()
      });
      this.powerUps[this.powerUps.length - 1].image.src = 'images/power-up.png';
    }, 5000);
  }

  stopGame() {
    clearInterval(this.coinInterval);
    clearInterval(this.obstacleInterval);
    clearInterval(this.powerUpInterval);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.player.draw();
    this.coins.forEach(coin => {
      this.ctx.drawImage(coin.image, coin.x, coin.y);
    });
    this.obstacles.forEach(obstacle => {
      this.ctx.drawImage(obstacle.image, obstacle.x, obstacle.y);
    });
    this.powerUps.forEach(powerUp => {
      this.ctx.drawImage(powerUp.image, powerUp.x, powerUp.y);
    });
    this.ctx.font = '20px Arial';
    this.ctx.textAlign = 'left';
    this.ctx.textBaseline = 'top';
    this.ctx.fillText(`Score: ${this.score}`, 10, 10);
  }

  update() {
    this.coins.forEach((coin, index) => {
      if (this.player.x < coin.x + 20 &&
          this.player.x + 50 > coin.x &&
          this.player.y < coin.y + 20 &&
          this.player.y + 50 > coin.y) {
        this.score += 10;
        this.coins.splice(index, 1);
      }
    });

    this.obstacles.forEach((obstacle, index) => {
      if (this.player.x < obstacle.x + 20 &&
          this.player.x + 50 > obstacle.x &&
          this.player.y < obstacle.y + 20 &&
          this.player.y + 50 > obstacle.y) {
        this.stopGame();
        alert("Game Over");
      }
    });

    this.powerUps.forEach((powerUp, index) => {
      if (this.player.x < powerUp.x + 20 &&
          this.player.x + 50 > powerUp.x &&
          this.player.y < powerUp.y + 20 &&
          this.player.y + 50 > powerUp.y) {
        this.player.powerUp = true;
        this.powerUps.splice(index, 1);
      }
    });
  }
}
