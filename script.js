const car = document.getElementById("my-car");
const left_border = document.getElementById("road").offsetLeft;
const right_border = document.getElementById("road").offsetLeft + 400;
console.log(left_border, right_border);


let moveBy = 10;
let left_pos = document.getElementById("road").offsetLeft;

window.addEventListener("load", () => {
	car.style.position = "absolute";
    car.style.left = `${left_pos + 16}px`;
})

window.addEventListener("keydown", (e) => {
	if (e.key === "ArrowRight") {
        if (parseInt(car.style.left) + moveBy < right_border -44)
    	    car.style.left = parseInt(car.style.left) + moveBy + "px";
    }
    else if (e.key === "ArrowLeft") {
        if (parseInt(car.style.left) + moveBy > left_border + 30)
    	    car.style.left = parseInt(car.style.left) - moveBy + "px";
    }
})


let pos = 0;
const my_div = document.getElementById("car1");
my_div.style.position = "absolute";
let left = document.getElementById("road").offsetLeft;
let right= left + 350;
my_div.style.left = `${Math.floor(Math.random() * (right- left) + left)}px`;

let space = window.innerHeight - my_div.offsetTop;

let lastRenderTime = 0;
const div_speed = 10;


function move(currentTime) {
    window.requestAnimationFrame(move); 
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / div_speed) {
        return;
    }
    console.log(secondsSinceLastRender);
    lastRenderTime = currentTime;

    space = window.innerHeight - my_div.offsetTop;
    if (space > 0) {
        draw();
        console.log(space);
    }
    else{
        pos = -30;
        my_div.style.top = `${pos}px`;
        let left_pos = document.getElementById("road").offsetLeft;
        let right_pos = left_pos + 350;
        my_div.style.left = `${Math.floor(Math.random() * (right_pos - left_pos) + left_pos)}px`;
    }
}

window.requestAnimationFrame(move);

function draw() {
    pos += 10;
    my_div.style.top = `${pos}px`;
    check_colision();
}

function check_colision() {

    if (car.offsetTop === my_div.offsetTop) {
        console.log("COLLISION");
        
    }
}



