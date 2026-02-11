const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const body = document.querySelector("body");

const randomColor = () => {
    const hue = Math.floor(Math.random() * 360);   // 0–360
    const saturation = 70;                         // vibrant
    const lightness = 50;                          // not too dark/light

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};



let intervalId = null;

const startColorChange = () => {
    if (intervalId !== null) return; // prevent multiple intervals

    intervalId = setInterval(() => {
        body.style.backgroundColor = randomColor();
    }, 1500);
};

const stopColorChange = () => {
    clearInterval(intervalId);
    intervalId = null;
};

startBtn.addEventListener("click", startColorChange);
stopBtn.addEventListener("click", stopColorChange);
