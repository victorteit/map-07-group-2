const canvas = document.getElementById('canvas1');
/* ctx stands for context and getContext is used with a 
canvas element. The string argument '2d' is leading to the
creation of a 'CanvasRenderingContext2D' object. This represents
a two-dimensional rendering context.
*/
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 200;
const enemiesArray = [];

let gameFrame = 0;

class Enemy {
    constructor() {
        // the image sprite
        this.image = new Image();
        this.image.src = 'assets/enemy3.png';
        // the enemy object speed
        this.speed = Math.random() * 4 + 1;
        // this is the size of the sprite frame in pixel
        this.spriteWidth = 218;
        this.spriteHeight = 177;

        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle = 0;
        this.angleSpeed = Math.random() * 2 + 0.5;
        // this is to get a curve from the enemy pattern
        // this.curve = Math.random() * 200;
    }

    update() {
        // this is using both Math.sin/Math.cos in the x and y
        // with the curve variable it can have a more random pattern
        // this.x = this.curve * Math.sin(this.angle * Math.PI/360) + (canvas.width/2 - this.width/2);
        // this.y = this.curve * Math.cos(this.angle * Math.PI/360) + (canvas.height/2 - this.height/2);
        this.x = canvas.width/2 * Math.sin(this.angle * Math.PI/90) + (canvas.width/2 - this.width/2);
        this.y = canvas.height/2 * Math.cos(this.angle * Math.PI/270) + (canvas.height/2 - this.height/2);
        this.angle += this.angleSpeed;
        if (this.x + this.width < 0) this.x = canvas.width;
        // animate sprites
        if (gameFrame % this.flapSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }

    draw() {
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        /* 1 image we want to draw
            2,3,4,5: where we what to crop out from the spread sheet
            6,7,8,9: determine where one canvas we want to place the cropped out frame
        */
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}
// const enemy1 = new Enemy();
for (let i = 0; i < numberOfEnemies; i++) {
    enemiesArray.push(new Enemy());
}
console.log(enemiesArray);
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();