let div_bg = document.getElementById("main");

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        /* Math.floor(Math.random() -> selects a random number but we want 
        16 different colors here so we changed the value to 16*/
    }
    return color;
}
function changeBackgroundColor(){
    div_bg.style.backgroundColor = getRandomColor();
}

setInterval(changeBackgroundColor, 1000);




/* ---------2nd Code -------*/

let img_holder = document.getElementById("img-holder");
let toggleButton = document.getElementById("submit");
let frequencyInput = document.getElementById("frequency");

let images = [
    "./photos/1.jpg", "./photos/2.jpg", "./photos/3.jpg", "./photos/4.jpg",
    "./photos/5.jpg", "./photos/6.jpg", "./photos/7.jpg", "./photos/8.jpg",
    "./photos/9.jpg", "./photos/10.jpg", "./photos/11.jpg", "./photos/12.jpg",
    "./photos/13.jpg", "./photos/14.jpg", "./photos/15.jpg", "./photos/16.jpg",
    "./photos/17.jpg"
];

let intervalId = null;

function getRandomImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

function changeImage() {
    let randomImage = getRandomImage();
    img_holder.style.backgroundImage = `url('${randomImage}')`;
    img_holder.style.backgroundSize = 'cover';
    img_holder.style.backgroundPosition = 'center';
}

function toggleImageChange() {
    if (intervalId === null) {
        let frequency = parseInt(frequencyInput.value);
        if (isNaN(frequency) || frequency <= 0) {
            alert("Please enter a valid frequency in milliseconds.");
            return;
        }
        intervalId = setInterval(changeImage, frequency);
        toggleButton.textContent = "Stop";
    } else {
        clearInterval(intervalId);
        intervalId = null;
        toggleButton.textContent = "Start";
    }
}

toggleButton.addEventListener("click", toggleImageChange);
