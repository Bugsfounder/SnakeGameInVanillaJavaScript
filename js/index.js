// Game Constancts & variables
let inputDirection = { x: 0, y: 0 };

// sounds variables are here 
const foodSound = new Audio('../music/food.mp3');
const gameOverSound = new Audio('../music/gameover.mp3');
const moveSound = new Audio('../music/move.mp3');
const musicSound = new Audio('../music/music.mp3');
let speed = 6;
let lastPaintTime = 0;
let snakeArr = [{
    x: 13,
    y: 15
}];
let food = { x: 6, y: 7 };
let score = 0;

// game funtions here

function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function isCollide(snake) {
    // if you bump yourself
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }

    // if you bump into the wall
    if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {
        return true;
    }
}


function gameEngine() {
    // Part 1: undationg the snake Array & Food
    if (isCollide(snakeArr)) {
        gameOverSound.play();
        musicSound.pause();
        inputDirection = { x: 0, y: 0 };
        alert('Game Over Press Any Key To Play Again!');
        snakeArr = [{ x: 13, y: 15 }];
        musicSound.play();
        score = 0;
    }

    // if you eaten the food increase the score and regenerate the food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        foodSound.play();
        snakeArr.unshift({
            x: snakeArr[0].x + inputDirection.x,
            y: snakeArr[0].y + inputDirection.y
        });
        let a = 2;
        let b = 16;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
    }


    // moving the snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = {...snakeArr[i] };
    }
    snakeArr[0].x += inputDirection.x;
    snakeArr[0].y += inputDirection.y;





    // part 2: Display the snake and food 
    // Display the snake here 
    boad = document.getElementById('boad');
    boad.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        boad.appendChild(snakeElement);
        if (index === 0) {
            snakeElement.classList.add('head');
        } else {
            snakeElement.classList.add('snake');
        }
    });
    // Display the food 
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    boad.appendChild(foodElement);

}







// main game logic starts here
window.requestAnimationFrame(main);
window.addEventListener('keydown', (e) => {
    // console.log('key down is: ', e);
    inputDirection = { x: 0, y: 1 }; // if user clicks any key starts the game
    moveSound.play();
    switch (e.key) {
        case 'ArrowUp':
            console.log('ArrowUp');
            inputDirection.x = 0;
            inputDirection.y = -1;
            break;

        case 'ArrowDown':
            console.log('ArrowDown');
            inputDirection.x = 0;
            inputDirection.y = 1;
            break;

        case 'ArrowLeft':
            console.log('ArrowLeft');
            inputDirection.x = -1;
            inputDirection.y = 0;
            break;

        case 'ArrowRight':
            console.log('ArrowRight');
            inputDirection.x = 1;
            inputDirection.y = 0;
            break;

        default:
            break;
    }

})