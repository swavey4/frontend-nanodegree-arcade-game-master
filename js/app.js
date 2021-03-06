'use strict'
// Enemies our player must avoid
class Enemy {
    // Variables applied to each of our instances go here
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    constructor(x,y){
      this.x = x;
      this.y = y;
      // Got this code idea from MDN website
      this.speed = Math.floor(Math.random()* Math.floor(200));
      this.sprite = 'images/enemy-bug.png';
    }

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
    update (dt) {
      this.x += this.speed * dt;

// Loop the enemy object
      if (this.x > 505){
         this.x = 0;
      }

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.


// Handles collision with the player method
      if (player.x < this.x + 70 &&
          player.x + 70 > this.x &&
          player.y < this.y + 50 &&
          50 + player.y > this.y) {
            alert('collison');
            player.x = 100;
            player.y = 300;
          }

    }
// Draw the enemy on the screen, required method for game
    render () {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {

    constructor(x,y){
      this.sprite = 'images/char-boy.png';
      this.x = x;
      this.y = y;
    }

    update (dt) {

    }

    render () {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(allowedKeys){
      if (allowedKeys === 'left' && this.x > 0){
        this.x -= 100;
      }
      if (allowedKeys === 'right' && this.x < 350){
        this.x += 100;
      }
      if (allowedKeys === 'up' && this.y > 0){
        this.y -= 85;
      }
      if (allowedKeys === 'down' && this.y < 350){
        this.y += 85;
      }
      if (this.y < 0){
          alert('congrats!');
          window.location.reload(true);

      }
    }


};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const allEnemies = [];
// Place the player object in a variable called player
const player = new Player(100,300);
const enemyA = new Enemy(60, 60);
allEnemies.push(enemyA);
const enemyB = new Enemy(60, 145);
allEnemies.push(enemyB);
const enemyC = new Enemy(60, 225);
allEnemies.push(enemyC);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
