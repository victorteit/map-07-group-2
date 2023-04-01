// load > DOMContentLoaded because DOMContentLoaded only works on a local system
document.addEventListener('load', function() {
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 800;

class Game {
    constructor() {
        this.enemies = [];
    }

    update() {

    }

    draw() {

    }

    #addnewEnemy() {

    }
}

class Enemey {
    constructor() {

    }

    update() {

    }

    draw() {

    }
}

// By counting the time by using requestAnimationFrame passing automatically a time stamp
let lastTime = 1;
function animate(timeStamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    console.log(deltaTime);
    // some code
    requestAnimationFrame(animate)
}
animate(0);
})